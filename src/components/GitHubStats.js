import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { FiExternalLink, FiFolder, FiGitBranch, FiGitCommit, FiRefreshCw, FiStar, FiUsers } from 'react-icons/fi'
import { Links } from './links'

const GITHUB_USERNAME = 'ireneancillaa'
const CACHE_KEY = `gh_stats_cache_${GITHUB_USERNAME}`
const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes to stay well under GitHub's 60 req/hr unauthenticated limit

const LANGUAGE_COLORS = {
  Dart: '#38bdf8',
  Swift: '#f97316',
  Kotlin: '#a78bfa',
  JavaScript: '#facc15',
  TypeScript: '#60a5fa',
  HTML: '#fb7185',
  CSS: '#34d399',
  Python: '#4ade80'
}

function useCountUp(target, shouldAnimate) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldAnimate || target <= 0) {
      setValue(target)
      return
    }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    let rafId = null
    const duration = 700
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [target, shouldAnimate])

  return value
}

export const GitHubStats = () => {
  const [status, setStatus] = useState('loading')
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [latestCommits, setLatestCommits] = useState({})
  const [contribData, setContribData] = useState(null)
  const [inView, setInView] = useState(false)
  const [reloadTick, setReloadTick] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const forceRefresh = reloadTick > 0

    let cached = null
    try {
      const raw = localStorage.getItem(CACHE_KEY)
      if (raw) cached = JSON.parse(raw)
    } catch {
      cached = null
    }

    if (!forceRefresh && cached && Date.now() - cached.savedAt < CACHE_TTL_MS) {
      setProfile(cached.profile)
      setRepos(cached.repos)
      setLatestCommits(cached.latestCommits || {})
      setContribData(cached.contribData || null)
      setStatus(cached.repos?.length === 0 && !cached.profile?.public_repos ? 'empty' : 'ready')
      return () => controller.abort()
    }

    setStatus('loading')

    async function loadGitHub() {
      try {
        const contribPromise = fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
          { signal: controller.signal }
        )
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null)

        const [userRes, reposRes, contribJson] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`, {
            signal: controller.signal
          }),
          contribPromise
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error(`GitHub API returned ${userRes.status}`)
        }

        const userData = await userRes.json()
        const reposData = await reposRes.json()
        const ownRepos = Array.isArray(reposData) ? reposData.filter((r) => !r.fork) : []

        // Fetch latest commit only for the 3 most recently pushed repos to stay well under rate limits
        const topThree = ownRepos.slice(0, 3)
        const commitEntries = await Promise.all(
          topThree.map(async (repo) => {
            try {
              const res = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
                { signal: controller.signal }
              )
              if (!res.ok) return [repo.name, null]
              const commits = await res.json()
              const first = Array.isArray(commits) && commits[0]
              if (!first?.commit) return [repo.name, null]
              return [
                repo.name,
                {
                  message: first.commit.message.split('\n')[0],
                  date: first.commit.author?.date,
                  sha: first.sha?.slice(0, 7),
                  url: first.html_url
                }
              ]
            } catch {
              return [repo.name, null]
            }
          })
        )

        const commitsMap = Object.fromEntries(commitEntries)
        const nextContrib = contribJson && Array.isArray(contribJson.contributions) ? contribJson : null

        setProfile(userData)
        setRepos(ownRepos)
        setLatestCommits(commitsMap)
        if (nextContrib) setContribData(nextContrib)
        setStatus(ownRepos.length === 0 && !userData.public_repos ? 'empty' : 'ready')

        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              savedAt: Date.now(),
              profile: userData,
              repos: ownRepos,
              latestCommits: commitsMap,
              contribData: nextContrib
            })
          )
        } catch {
          // Ignore storage quota errors
        }
      } catch (err) {
        if (err.name === 'AbortError') return
        // Fall back to last cached real data if rate-limited
        if (cached?.profile && Array.isArray(cached?.repos)) {
          setProfile(cached.profile)
          setRepos(cached.repos)
          setLatestCommits(cached.latestCommits || {})
          setContribData(cached.contribData || null)
          setStatus('ready')
          return
        }
        setStatus('error')
      }
    }

    loadGitHub()
    return () => controller.abort()
  }, [reloadTick])

  const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
  const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0)

  const languageCounts = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1
    }
    return acc
  }, {})

  const totalLangRepos = Object.values(languageCounts).reduce((a, b) => a + b, 0)
  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      count,
      pct: totalLangRepos > 0 ? Math.round((count / totalLangRepos) * 100) : 0,
      color: LANGUAGE_COLORS[name] || '#818cf8'
    }))

  const recentRepos = repos.slice(0, 3)

  const heatmapWeeks = []
  if (contribData?.contributions?.length) {
    const days = contribData.contributions
    for (let i = 0; i < days.length; i += 7) {
      heatmapWeeks.push(days.slice(i, i + 7))
    }
  }
  const totalLastYear =
    contribData?.total?.lastYear ??
    (contribData?.contributions?.reduce((sum, d) => sum + (d.count || 0), 0) || 0)

  const formatCommitMonth = (isoDate) => {
    if (!isoDate) return 'Recent'
    return new Date(isoDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const formatCommitDate = (isoDate) => {
    if (!isoDate) return ''
    return new Date(isoDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const repoCountAnim = useCountUp(profile?.public_repos || 0, inView && status === 'ready')
  const followersAnim = useCountUp(profile?.followers || 0, inView && status === 'ready')
  const starsAnim = useCountUp(totalStars, inView && status === 'ready')
  const forksAnim = useCountUp(totalForks, inView && status === 'ready')

  return (
    <section className="section-container" id="github-stats" ref={sectionRef}>
      <Container>
        <div className="section-header-block">
          <span className="section-category-tag">Open Source Activity</span>
          <h2 className="section-main-heading">GitHub Activity &amp; Stack</h2>
          <p className="section-description">
            Live repository metrics, language distribution, and recent public builds synced directly from GitHub.
          </p>
        </div>

        {status === 'loading' && (
          <div className="github-state-panel" aria-live="polite">
            <div className="github-stats-grid">
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className="github-stat-card skeleton-block" />
              ))}
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="github-state-panel github-error-box" role="status">
            <p className="github-state-message">
              Unable to load live GitHub stats right now (API rate limit or network unavailable).
            </p>
            <div className="github-state-actions">
              <button
                type="button"
                className="btn-hero-secondary"
                onClick={() => setReloadTick((t) => t + 1)}
              >
                <FiRefreshCw size={15} aria-hidden="true" />
                <span>Retry</span>
              </button>
              <a
                href={Links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
              >
                <span>Open GitHub Profile</span>
                <FiExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

        {status === 'empty' && (
          <div className="github-state-panel github-error-box">
            <p className="github-state-message">No public repositories found for @{GITHUB_USERNAME}.</p>
          </div>
        )}

        {status === 'ready' && (
          <div className="github-dashboard">
            <div className="github-stats-grid">
              <div className="github-stat-card">
                <div className="github-stat-icon"><FiFolder size={18} aria-hidden="true" /></div>
                <div className="github-stat-value">{repoCountAnim}</div>
                <div className="github-stat-label">Public Repositories</div>
              </div>
              <div className="github-stat-card">
                <div className="github-stat-icon"><FiStar size={18} aria-hidden="true" /></div>
                <div className="github-stat-value">{starsAnim}</div>
                <div className="github-stat-label">Total Stars</div>
              </div>
              <div className="github-stat-card">
                <div className="github-stat-icon"><FiGitBranch size={18} aria-hidden="true" /></div>
                <div className="github-stat-value">{forksAnim}</div>
                <div className="github-stat-label">Total Forks</div>
              </div>
              <div className="github-stat-card">
                <div className="github-stat-icon"><FiUsers size={18} aria-hidden="true" /></div>
                <div className="github-stat-value">{followersAnim}</div>
                <div className="github-stat-label">GitHub Followers</div>
              </div>
            </div>

            {topLanguages.length > 0 && (
              <div className="github-lang-panel">
                <div className="github-panel-header">
                  <h3>Top Languages</h3>
                  <span>Across {totalLangRepos} repositories</span>
                </div>
                <div className="github-lang-bar" role="img" aria-label="Repository language distribution">
                  {topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      className="github-lang-segment"
                      style={{
                        width: inView ? `${lang.pct}%` : '0%',
                        backgroundColor: lang.color
                      }}
                      title={`${lang.name}: ${lang.pct}%`}
                    />
                  ))}
                </div>
                <div className="github-lang-legend">
                  {topLanguages.map((lang) => (
                    <div key={lang.name} className="github-lang-legend-item">
                      <span className="github-lang-dot" style={{ backgroundColor: lang.color }} />
                      <span className="github-lang-name">{lang.name}</span>
                      <span className="github-lang-pct">{lang.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {heatmapWeeks.length > 0 && (
              <div className="github-heatmap-panel">
                <div className="github-panel-header">
                  <h3>{totalLastYear} contributions in the last year</h3>
                  <span>@{GITHUB_USERNAME}</span>
                </div>
                <div className="github-heatmap-scroll">
                  <div className="github-heatmap-grid" role="img" aria-label={`${totalLastYear} GitHub contributions in the last year`}>
                    {heatmapWeeks.map((week, wIdx) => (
                      <div key={wIdx} className="github-heatmap-week">
                        {week.map((day) => (
                          <span
                            key={day.date}
                            className={`github-heatmap-day level-${day.level || 0}`}
                            title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="github-heatmap-footer">
                  <span className="github-heatmap-note">Past 12 months public activity</span>
                  <div className="github-heatmap-legend">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((lvl) => (
                      <span key={lvl} className={`github-heatmap-day level-${lvl}`} />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>
            )}

            {recentRepos.length > 0 && (
              <div className="github-activity-panel">
                <div className="github-panel-header">
                  <h3>Contribution activity</h3>
                  <span>3 latest repository commits</span>
                </div>

                <div className="github-activity-timeline">
                  {recentRepos.map((repo) => {
                    const commit = latestCommits[repo.name]
                    const monthLabel = formatCommitMonth(commit?.date || repo.pushed_at)
                    const dateLabel = formatCommitDate(commit?.date || repo.pushed_at)

                    return (
                      <div key={repo.id} className="github-activity-item">
                        <div className="github-activity-month-row">
                          <span className="github-activity-month">{monthLabel}</span>
                          <span className="github-activity-divider" />
                        </div>

                        <div className="github-activity-body">
                          <div className="github-activity-rail">
                            <span className="github-activity-node" aria-hidden="true">
                              <FiGitCommit size={14} />
                            </span>
                            <span className="github-activity-line" aria-hidden="true" />
                          </div>

                          <div className="github-activity-content">
                            <div className="github-activity-top">
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-activity-repo"
                              >
                                {GITHUB_USERNAME}/{repo.name}
                              </a>
                              <div className="github-activity-right">
                                {dateLabel && <span className="github-activity-date">{dateLabel}</span>}
                                <span className="github-activity-bar" aria-hidden="true" />
                              </div>
                            </div>

                            {commit ? (
                              <a
                                href={commit.url || repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-activity-commit"
                              >
                                <span className="github-commit-msg">{commit.message}</span>
                                {commit.sha && <span className="github-commit-sha">{commit.sha}</span>}
                              </a>
                            ) : (
                              <p className="github-activity-fallback">
                                {repo.description || 'Updated repository source code.'}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
