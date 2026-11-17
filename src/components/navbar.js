import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Links } from './links'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import cv from '../assets/file/Irene Ancilla Chow-resume.pdf'

export const NavBar = ({ onOpenConnect }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section spy when on homepage
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'projects', 'experience', 'skills']
        const scrollPosition = window.scrollY + 200

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId)
          if (el) {
            const top = el.offsetTop
            const height = el.offsetHeight
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveSection('about')
    } else if (location.pathname === '/projects') {
      setActiveSection('projects')
    } else if (location.pathname === '/experience') {
      setActiveSection('experience')
    } else if (location.pathname === '/') {
      setActiveSection('home')
    }
  }, [location])

  const handleNavClick = (sectionId, route) => {
    setIsMobileMenuOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionId)
      }
    } else {
      navigate(route || '/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <>
      <header className="macos-navbar-container">
        <nav className={`macos-navbar-bar ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
          {/* Left Brand with Live Indicator */}
          <div className="nav-brand-group">
            <Link
              to="/"
              className="nav-brand-link"
              onClick={() => handleNavClick('home', '/')}
              aria-label="Irene Ancilla Chow - Home"
            >
              <div className="nav-brand-avatar">IAC</div>
              <span className="nav-brand-name">Irene Ancilla Chow</span>
            </Link>
            <div className="nav-status-chip">
              <span className="status-dot"></span>
              <span>Available</span>
            </div>
          </div>

          {/* Center App-like Segmented Control */}
          <div className="nav-segmented-control" role="tablist" aria-label="Sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'home'}
              className={`segmented-pill-btn ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home', '/')}
            >
              Overview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'about'}
              className={`segmented-pill-btn ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => {
                setIsMobileMenuOpen(false)
                navigate('/about')
              }}
            >
              About
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'projects'}
              className={`segmented-pill-btn ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects', '/projects')}
            >
              Projects
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'experience'}
              className={`segmented-pill-btn ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => handleNavClick('experience', '/experience')}
            >
              Experience
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'skills'}
              className={`segmented-pill-btn ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills', '/')}
            >
              Stack
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="nav-actions-group">
            <a
              href={Links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              aria-label="GitHub Profile"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href={Links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              aria-label="LinkedIn Profile"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-resume"
              aria-label="View Resume PDF"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Resume</span>
            </a>

            <button
              type="button"
              className="nav-btn-connect"
              onClick={onOpenConnect}
              aria-label="Open Connect Dialog"
            >
              <span>Connect</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Offcanvas Drawer */}
      <div
        className={`macos-mobile-drawer-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />
      <div className={`macos-mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="drawer-header">
          <div className="nav-brand-group">
            <div className="nav-brand-avatar">IAC</div>
            <span className="nav-brand-name">Irene Ancilla Chow</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            &times;
          </button>
        </div>

        <nav className="drawer-links-list">
          <button
            type="button"
            className={`drawer-nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', '/')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`drawer-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => {
              setIsMobileMenuOpen(false)
              navigate('/about')
            }}
          >
            About
          </button>
          <button
            type="button"
            className={`drawer-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects', '/projects')}
          >
            Projects
          </button>
          <button
            type="button"
            className={`drawer-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience', '/experience')}
          >
            Experience
          </button>
          <button
            type="button"
            className={`drawer-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills', '/')}
          >
            Stack & Skills
          </button>
        </nav>

        <div className="drawer-footer-actions">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            View Resume (PDF)
          </a>
          <button
            type="button"
            className="btn-hero-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              setIsMobileMenuOpen(false)
              onOpenConnect()
            }}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </>
  )
}
