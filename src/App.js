import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navbar'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { Footer } from './components/footer'
import { ScrollToTop } from './components/ScrollToTop'
import { ConnectModal } from './components/ConnectModal'

function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false)
  const spotlightRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    let scrollRaf = null
    const updateProgress = () => {
      scrollRaf = null
      if (!progressRef.current) return
      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - window.innerHeight
      const ratio = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
      progressRef.current.style.transform = `scaleX(${ratio})`
    }

    const handleScroll = () => {
      if (!scrollRaf) {
        scrollRaf = window.requestAnimationFrame(updateProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollRaf) window.cancelAnimationFrame(scrollRaf)
    }
  }, [])

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReducedMotion) return

    let frameId = null
    let latestX = -999
    let latestY = -999

    const updateSpotlight = () => {
      frameId = null
      if (!spotlightRef.current) return
      spotlightRef.current.style.setProperty('--mouse-x', `${latestX}px`)
      spotlightRef.current.style.setProperty('--mouse-y', `${latestY}px`)
      spotlightRef.current.style.opacity = '1'
    }

    const handleMouseMove = (e) => {
      latestX = e.clientX
      latestY = e.clientY
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateSpotlight)
      }
    }

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  const handleOpenConnect = () => {
    setIsConnectOpen(true)
  }

  const handleCloseConnect = () => {
    setIsConnectOpen(false)
  }

  return (
    <Router>
      <div className="App">
        <div ref={progressRef} className="scroll-progress-bar" aria-hidden="true" />
        <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />
        <ScrollToTop />
        <NavBar onOpenConnect={handleOpenConnect} />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenConnect={handleOpenConnect} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage onOpenConnect={handleOpenConnect} />} />
            <Route path="/experience" element={<ExperiencePage onOpenConnect={handleOpenConnect} />} />
          </Routes>
        </main>
        <Footer onOpenConnect={handleOpenConnect} />
        <ConnectModal isOpen={isConnectOpen} onClose={handleCloseConnect} />
      </div>
    </Router>
  )
}

export default App
