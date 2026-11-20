import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiArrowUp, FiMail, FiMapPin, FiFileText } from 'react-icons/fi'
import { Links } from './links'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import discord from '../assets/img/discord.svg'

export const Footer = ({ onOpenConnect }) => {
  const resumePageUrl = `${process.env.PUBLIC_URL || ''}/resume.html`
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="app-footer">
      <Container>
        {/* Closing Collaboration Banner */}
        <div className="footer-cta-panel">
          <div className="footer-cta-copy">
            <span className="footer-location-pill">
              <FiMapPin size={13} aria-hidden="true" />
              <span>Jakarta, Indonesia</span>
            </span>
            <h2 className="footer-cta-heading">Have a mobile or web project in mind?</h2>
            <p className="footer-cta-subtext">
              Open to software engineering internships, cross-platform mobile builds, and collaborative digital product work.
            </p>
          </div>
          <div className="footer-cta-actions">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onOpenConnect}
            >
              <span>Let&apos;s Connect</span>
            </button>
            <a
              href={resumePageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <FiFileText size={16} aria-hidden="true" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          <div className="footer-left">
            <span className="footer-brand-title">Irene Ancilla Chow</span>
            <span className="footer-tagline">
              Mobile Application &amp; Technology Student at BINUS University. Building with Flutter, Swift, Kotlin, and React.
            </span>
            <a href="mailto:ireneancilla@gmail.com" className="footer-email-link">
              <FiMail size={15} aria-hidden="true" />
              <span>ireneancilla@gmail.com</span>
            </a>
          </div>

          <nav className="footer-nav-col" aria-label="Footer Navigation">
            <span className="footer-col-label">Explore</span>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-nav-link" onClick={scrollToTop}>Overview</Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link" onClick={scrollToTop}>About</Link>
              </li>
              <li>
                <Link to="/projects" className="footer-nav-link" onClick={scrollToTop}>Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="footer-nav-link" onClick={scrollToTop}>Experience</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-social-col">
            <span className="footer-col-label">Socials</span>
            <div className="footer-social-grid">
              <a
                href={Links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="GitHub Profile"
              >
                <img src={github} alt="" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={Links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="LinkedIn Profile"
              >
                <img src={linkedin} alt="" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={Links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="Instagram Profile"
              >
                <img src={instagram} alt="" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href={Links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="Discord Profile"
              >
                <img src={discord} alt="" aria-hidden="true" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Irene Ancilla Chow. Built with React.
          </div>
          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FiArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
