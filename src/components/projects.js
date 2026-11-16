import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'

const MoodlySimulator = () => {
  const [selectedMood, setSelectedMood] = useState('Joyful')
  const moods = [
    { name: 'Joyful', emoji: '✨', score: '92%', note: 'High energy and positive focus logged.' },
    { name: 'Calm', emoji: '🌿', score: '85%', note: 'Peaceful baseline with relaxed metrics.' },
    { name: 'Focused', emoji: '🎯', score: '88%', note: 'Deep work mode active, no distractions.' },
    { name: 'Tired', emoji: '🌙', score: '58%', note: 'Rest and sleep reminder scheduled.' }
  ]

  const activeMoodObj = moods.find((m) => m.name === selectedMood) || moods[0]

  return (
    <div className="moodly-interactive-widget">
      <div className="widget-label-row">
        <span className="widget-title">CoreData Live State Engine</span>
        <span className="widget-status">Mood Index: {activeMoodObj.score}</span>
      </div>
      <div className="mood-selector-grid">
        {moods.map((m) => (
          <button
            key={m.name}
            type="button"
            className={`mood-choice-btn ${selectedMood === m.name ? 'selected' : ''}`}
            onClick={() => setSelectedMood(m.name)}
            aria-label={`Select mood ${m.name}`}
          >
            <span className="mood-emoji">{m.emoji}</span>
            <span className="mood-label">{m.name}</span>
          </button>
        ))}
      </div>
      <div className="mood-feedback-box">
        <strong>SwiftUI ObservableState:</strong> {activeMoodObj.note}
      </div>
    </div>
  )
}

const ChristianWijayaSimulator = () => {
  const [cartCount, setCartCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')

  return (
    <div className="store-simulator-widget">
      <div className="store-preview-header">
        <span className="widget-title">Reactive Cart Simulator</span>
        <span className="store-badge-cart">Cart: {cartCount} items</span>
      </div>
      <div className="store-mock-item">
        <div className="mock-thumb">👔</div>
        <div className="mock-details">
          <div className="mock-name">Minimalist Linen Shirt</div>
          <div className="mock-price">IDR 349.000 (Size: {selectedSize})</div>
        </div>
        <button
          type="button"
          className="mock-action-btn"
          onClick={() => setCartCount((prev) => prev + 1)}
        >
          + Add
        </button>
      </div>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>
        <span>Size:</span>
        {['S', 'M', 'L', 'XL'].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSelectedSize(s)}
            style={{
              padding: '2px 8px',
              borderRadius: '4px',
              background: selectedSize === s ? '#818cf8' : 'rgba(255,255,255,0.06)',
              color: selectedSize === s ? '#fff' : 'inherit',
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}

const DojoMovieSimulator = () => {
  const [genre, setGenre] = useState('Sci-Fi')
  const movies = {
    'Sci-Fi': { title: 'Interstellar Odyssey', rating: '8.9/10', icon: '🚀' },
    'Action': { title: 'Velocity Protocol', rating: '8.4/10', icon: '⚡' },
    'Drama': { title: 'Silent Horizons', rating: '8.7/10', icon: '🎭' }
  }

  const currentMovie = movies[genre] || movies['Sci-Fi']

  return (
    <div className="movie-simulator-widget">
      <div className="genre-filter-chips">
        {['Sci-Fi', 'Action', 'Drama'].map((g) => (
          <button
            key={g}
            type="button"
            className={`genre-chip-btn ${genre === g ? 'active' : ''}`}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="movie-result-card">
        <div className="movie-poster-box">{currentMovie.icon}</div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{currentMovie.title}</div>
          <div style={{ fontSize: '11px', color: '#38bdf8' }}>Jetpack Compose • SQLite Cached ({currentMovie.rating})</div>
        </div>
      </div>
    </div>
  )
}

const VhsVaultSimulator = () => {
  const [offlineSync, setOfflineSync] = useState(true)

  return (
    <div className="vhs-simulator-widget">
      <div className="vhs-tape-frame">
        <div className="vhs-reel">●</div>
        <div className="vhs-title-sticker">VHS_VAULT_REST_API</div>
        <div className="vhs-reel">●</div>
      </div>
      <div className="vhs-offline-toggle">
        <span>SQLite Local Bookmark Cache</span>
        <button
          type="button"
          onClick={() => setOfflineSync(!offlineSync)}
          style={{
            background: offlineSync ? '#10b981' : '#64748b',
            color: '#fff',
            padding: '2px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 600
          }}
        >
          {offlineSync ? 'Synced' : 'Offline'}
        </button>
      </div>
    </div>
  )
}

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projectsData = [
    {
      id: 'moodly',
      title: 'Moodly',
      filename: 'MoodTrackerView.swift',
      platform: 'iOS Native',
      category: 'mobile',
      role: 'iOS Mobile Developer & UI/UX Designer',
      duration: '2023',
      link: 'https://github.com/ireneancillaa/Moodly',
      tech: ['Swift', 'SwiftUI', 'CoreData', 'Charts', 'Human Interface Guidelines'],
      hasMockup: true,
      mockupImg: project2,
      simulatorComponent: <MoodlySimulator />,
      codeSnippet: `import SwiftUI
import CoreData

struct MoodTrackerView: View {
    @Environment(\\.managedObjectContext) private var viewContext
    @StateObject private var viewModel = MoodAnalyticsViewModel()
    
    var body: some View {
        VStack(spacing: 20) {
            MoodTrendChartView(data: viewModel.weeklyTrends)
                .frame(height: 220)
                .clipShape(RoundedRectangle(cornerRadius: 16))
            
            InteractiveMoodPicker(selected: $viewModel.currentMood)
                .onChange(of: viewModel.currentMood) { newMood in
                    viewModel.persistLog(newMood, in: viewContext)
                }
        }
        .padding()
        .background(Color(.systemBackground))
    }
}`,
      problem: 'Users struggle with complicated mental health journals that require too much friction and text typing.',
      solution: 'Designed a lightweight native iOS companion using SwiftUI and Core Data with tactile haptic feedback and instant trend charts.',
      challenges: 'Optimizing Core Data queries for instantaneous chart generation across multi-week timeframe spans without dropping 60fps.'
    },
    {
      id: 'dojo-movie',
      title: 'DoJo Movie',
      filename: 'MovieCatalogScreen.kt',
      platform: 'Android Native',
      category: 'mobile',
      role: 'Android Mobile Developer',
      duration: '2024',
      link: 'https://github.com/ireneancillaa/DoJoMovie',
      tech: ['Kotlin', 'Jetpack Compose', 'SQLite', 'Retrofit', 'Material 3'],
      hasMockup: true,
      mockupImg: project4,
      simulatorComponent: <DojoMovieSimulator />,
      codeSnippet: `@Composable
fun MovieCatalogScreen(
    viewModel: MovieViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    
    Scaffold(topBar = { SearchFilterTopBar(onQueryChange = viewModel::filterMovies) }) { padding ->
        LazyVerticalGrid(
            columns = GridCells.Adaptive(minSize = 160.dp),
            contentPadding = padding
        ) {
            items(uiState.movies, key = { it.id }) { movie ->
                MovieCard(
                    movie = movie,
                    onClick = { viewModel.selectMovie(movie.id) }
                )
            }
        }
    }
}`,
      problem: 'Movie enthusiast apps often lack fast offline caching and have sluggish list renders.',
      solution: 'Constructed clean architecture with Jetpack Compose declarative UI, SQLite local persistence, and background sync routines.',
      challenges: 'Implementing robust offline-first synchronization using Room/SQLite while gracefully handling TMDB API rate limits.'
    },
    {
      id: 'christian-wijaya',
      title: 'Christian Wijaya',
      filename: 'CartContext.tsx',
      platform: 'Web Application',
      category: 'web',
      role: 'Front-End Developer & UI Designer',
      duration: '2023',
      link: 'https://github.com/ireneancillaa/ChristianWijaya',
      tech: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Responsive Design'],
      hasMockup: true,
      mockupImg: project1,
      simulatorComponent: <ChristianWijayaSimulator />,
      codeSnippet: `export const useShoppingCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addToCart = (product: Product, size: Size) => {
    setItems((prev) => {
      const existing = prev.find(i => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, size, qty: 1 }];
    });
  };

  const totalPrice = useMemo(() => 
    items.reduce((acc, curr) => acc + curr.price * curr.qty, 0), [items]
  );
  
  return { items, addToCart, totalPrice };
};`,
      problem: 'Fashion retail clients needed a high-performance web storefront with smooth product browsing and an intuitive cart flow.',
      solution: 'Engineered a modern, responsive web application with custom shopping cart state, responsive filtering, and seamless transitions.',
      challenges: 'Designing custom responsive layouts that remain visually balanced across wide desktop monitors down to compact mobile screens.'
    },
    {
      id: 'vhs-vault',
      title: 'VHS Vault',
      filename: 'vhs_bloc.dart',
      platform: 'Flutter Multiplatform',
      category: 'mobile',
      role: 'Cross-Platform Mobile Developer',
      duration: '2023 - 2024',
      link: 'https://github.com/ireneancillaa/VHS_Vault',
      tech: ['Flutter', 'Dart', 'BLoC Pattern', 'REST API', 'SQLite'],
      hasMockup: true,
      mockupImg: project3,
      simulatorComponent: <VhsVaultSimulator />,
      codeSnippet: `class MovieCatalogBloc extends Bloc<CatalogEvent, CatalogState> {
  final MovieRepository repository;
  
  MovieCatalogBloc({required this.repository}) : super(CatalogInitial()) {
    on<FetchMoviesEvent>((event, emit) async {
      emit(CatalogLoading());
      try {
        final localCache = await repository.getCachedBookmarks();
        final remoteMovies = await repository.fetchTrendingMovies();
        emit(CatalogLoaded(movies: remoteMovies, bookmarks: localCache));
      } catch (e) {
        emit(CatalogError(message: "Failed to sync catalog: $e"));
      }
    });
  }
}`,
      problem: 'Vintage cinema collectors wanted a centralized catalog with reliable offline access and retro UI aesthetics.',
      solution: 'Developed a cross-platform Flutter application utilizing BLoC pattern for predictable state flow and SQLite for local bookmarks.',
      challenges: 'Structuring clean multi-layer architecture isolating network and local database sources to guarantee 100% offline uptime.'
    }
  ]

  // Track active view per card: 'preview' | 'code' | 'narrative'
  const [cardViews, setCardViews] = useState({
    'moodly': 'preview',
    'dojo-movie': 'preview',
    'christian-wijaya': 'preview',
    'vhs-vault': 'preview'
  })

  // Track preview mode within card: 'interactive' | 'screenshot'
  const [previewSubModes, setPreviewSubModes] = useState({
    'moodly': 'interactive',
    'dojo-movie': 'interactive',
    'christian-wijaya': 'interactive',
    'vhs-vault': 'interactive'
  })

  const setView = (projectId, view) => {
    setCardViews((prev) => ({ ...prev, [projectId]: view }))
  }

  const setSubMode = (projectId, subMode) => {
    setPreviewSubModes((prev) => ({ ...prev, [projectId]: subMode }))
  }

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'mobile') return p.category === 'mobile'
    if (activeFilter === 'web') return p.category === 'web'
    return true
  })

  return (
    <section className="section-container" id="projects">
      <Container>
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-category-tag">Featured Engineering Works</span>
          <h2 className="section-main-heading">Selected Projects</h2>
          <p className="section-description">
            A showcase of native iOS, Android, cross-platform Flutter, and web engineering. Every project card features an interactive live component preview, clean architecture code snippets, and engineering deep dives.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="project-filter-bar">
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Work ({projectsData.length})
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            iOS & Mobile Platforms (3)
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Engineering (1)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => {
            const currentView = cardViews[proj.id] || 'preview'
            const currentSubMode = previewSubModes[proj.id] || 'interactive'

            return (
              <article key={proj.id} className="polymorphic-card" id={`project-${proj.id}`}>
                {/* macOS Window Chrome Header */}
                <div className="card-window-header">
                  <div className="mac-window-dots">
                    <span className="dot dot-close"></span>
                    <span className="dot dot-minimize"></span>
                    <span className="dot dot-maximize"></span>
                  </div>
                  <div className="card-window-title-group">
                    <span className="card-window-filename">{proj.filename}</span>
                    <span className="card-platform-badge">{proj.platform}</span>
                  </div>
                </div>

                {/* Polymorphic View Switcher Tabs */}
                <div className="card-mode-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={currentView === 'preview'}
                    className={`card-tab-btn ${currentView === 'preview' ? 'active' : ''}`}
                    onClick={() => setView(proj.id, 'preview')}
                  >
                    <span>✦</span>
                    <span>Interactive Preview</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={currentView === 'code'}
                    className={`card-tab-btn ${currentView === 'code' ? 'active' : ''}`}
                    onClick={() => setView(proj.id, 'code')}
                  >
                    <span>&lt;/&gt;</span>
                    <span>Architecture Code</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={currentView === 'narrative'}
                    className={`card-tab-btn ${currentView === 'narrative' ? 'active' : ''}`}
                    onClick={() => setView(proj.id, 'narrative')}
                  >
                    <span>≡</span>
                    <span>Deep Dive</span>
                  </button>
                </div>

                {/* Dynamic Content Canvas */}
                <div className="card-view-content">
                  {/* View 1: Preview / Mockup */}
                  {currentView === 'preview' && (
                    <div className="preview-interactive-canvas">
                      {/* Optional Sub-toggle between Interactive & Screenshot */}
                      {proj.hasMockup && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginBottom: '12px' }}>
                          <button
                            type="button"
                            onClick={() => setSubMode(proj.id, 'interactive')}
                            style={{
                              fontSize: '11px',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              background: currentSubMode === 'interactive' ? 'rgba(255,255,255,0.12)' : 'transparent',
                              color: currentSubMode === 'interactive' ? '#fff' : 'var(--text-muted)'
                            }}
                          >
                            Live Widget
                          </button>
                          <button
                            type="button"
                            onClick={() => setSubMode(proj.id, 'screenshot')}
                            style={{
                              fontSize: '11px',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              background: currentSubMode === 'screenshot' ? 'rgba(255,255,255,0.12)' : 'transparent',
                              color: currentSubMode === 'screenshot' ? '#fff' : 'var(--text-muted)'
                            }}
                          >
                            Mockup Image
                          </button>
                        </div>
                      )}

                      {currentSubMode === 'interactive' ? (
                        proj.simulatorComponent
                      ) : (
                        <div style={{ textAlign: 'center', overflow: 'hidden', borderRadius: '8px' }}>
                          <img
                            src={proj.mockupImg}
                            alt={`${proj.title} Mockup Preview`}
                            style={{ maxHeight: '180px', objectFit: 'contain', width: 'auto' }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* View 2: Architecture Code Snippet */}
                  {currentView === 'code' && (
                    <div className="code-architecture-canvas">
                      <pre>
                        <code>{proj.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* View 3: Technical Deep Dive Narrative */}
                  {currentView === 'narrative' && (
                    <div className="deep-dive-canvas">
                      <div className="narrative-block">
                        <span className="narrative-label">The Challenge</span>
                        <p className="narrative-text">{proj.problem}</p>
                      </div>
                      <div className="narrative-block">
                        <span className="narrative-label">Technical Architecture</span>
                        <p className="narrative-text">{proj.solution}</p>
                      </div>
                      <div className="narrative-block">
                        <span className="narrative-label">Key Engineering Insight</span>
                        <p className="narrative-text">{proj.challenges}</p>
                      </div>
                    </div>
                  )}

                  {/* Uniform Bottom Details */}
                  <div className="card-bottom-info">
                    <div className="card-project-title-row">
                      <h3 className="card-project-title">{proj.title}</h3>
                      <span className="card-project-duration">{proj.duration}</span>
                    </div>
                    <div className="card-project-role">{proj.role}</div>

                    <div className="card-tech-badges-row">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="card-tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="card-action-links">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-github-btn"
                        aria-label={`View ${proj.title} on GitHub`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>View Repository</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
