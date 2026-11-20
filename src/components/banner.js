import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiSmartphone } from 'react-icons/fi'
import headerImg from '../assets/img/header-img.svg'

export const Banner = ({ onOpenConnect }) => {
  const resumePageUrl = `${process.env.PUBLIC_URL || ''}/resume.html`
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['iOS & Mobile Developer', 'Front-End Web Engineer', 'UI/UX Designer']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(160)

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick()
    }, delta)

    return () => clearTimeout(ticker)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(1200)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum((prev) => prev + 1)
      setDelta(250)
    } else {
      setDelta(isDeleting ? 60 : 100)
    }
  }

  const techBadges = [
    { name: 'Flutter', icon: '🎯' },
    { name: 'Swift', icon: '⚡' },
    { name: 'Kotlin', icon: '🤖' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Figma', icon: '🎨' }
  ]

  return (
    <section className="hero-banner-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} xl={7}>
            {/* Top Status Pill */}
            <div className="hero-badge-pill">
              <span className="hero-badge-dot"></span>
              <span className="hero-badge-text">Mobile Programmer Intern @ PT Charoen Pokphand</span>
            </div>

            <div className="hero-title-greeting">Hello, I'm</div>
            <h1 className="hero-main-title">Irene Ancilla Chow</h1>

            <div className="hero-role-wrapper">
              <span className="hero-role-prefix">Specializing in</span>
              <span className="hero-role-typewriter">{text}</span>
            </div>

            <p className="hero-bio-paragraph">
              Computer Science student majoring in <strong>Mobile Application &amp; Technology</strong> at BINUS University with hands-on experience in <strong>cross-platform mobile development</strong>, <strong>web programming</strong>, and <strong>UI/UX design</strong>. Currently a Mobile Programmer Intern at PT Charoen Pokphand and Team Promotion at BINUS Square, turning ideas into user-friendly digital solutions.
            </p>

            {/* Dual CTAs */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={onOpenConnect}
                aria-label="Open connect modal"
              >
                <span>Let's Connect</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a
                href={resumePageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
                aria-label="View Resume PDF in new tab"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>View Resume</span>
              </a>
            </div>

            {/* Quick Tech Highlights */}
            <div className="hero-stack-preview">
              <span className="stack-preview-label">Core Ecosystem</span>
              <div className="stack-chips-row">
                {techBadges.map((badge, idx) => (
                  <span key={idx} className="stack-chip">
                    <span>{badge.icon}</span>
                    <span>{badge.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </Col>

          {/* Astronaut Visual (Preserved & Elevated) */}
          <Col lg={5} xl={5} className="d-none d-lg-block">
            <div className="hero-astronaut-container">
              <div className="astronaut-ambient-glow"></div>
              <img
                src={headerImg}
                alt="Irene Ancilla Astronaut Creative Visual"
                className="hero-astronaut-img"
              />
              <div className="astronaut-floating-badge">
                <div className="floating-badge-icon" aria-hidden="true">
                  <FiSmartphone size={18} />
                </div>
                <div className="floating-badge-text">
                  <span className="floating-badge-title">Mobile App &amp; Tech @ BINUS</span>
                  <span className="floating-badge-subtitle">Flutter, Swift &amp; Kotlin</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
