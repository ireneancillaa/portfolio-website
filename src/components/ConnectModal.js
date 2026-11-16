import React, { useState, useEffect } from 'react'
import { Links } from './links'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import discord from '../assets/img/discord.svg'
import cv from '../assets/file/Irene Ancilla Chow-resume.pdf'

export const ConnectModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)
  const email = 'ireneancilla@gmail.com'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2500)
  }

  return (
    <div className="modal-backdrop-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Connect with Irene">
      <div className="mac-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* macOS Title Bar */}
        <div className="mac-modal-titlebar">
          <div className="mac-window-dots">
            <span className="dot dot-close" onClick={onClose} role="button" aria-label="Close modal"></span>
            <span className="dot dot-minimize"></span>
            <span className="dot dot-maximize"></span>
          </div>
          <span className="mac-modal-title">connect.sh</span>
          <button className="mac-modal-close-icon" onClick={onClose} aria-label="Close dialog">
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="mac-modal-content">
          <div className="mac-modal-header">
            <div className="status-indicator-badge">
              <span className="pulse-dot"></span>
              <span>Available for opportunities</span>
            </div>
            <h2>Let's build something extraordinary</h2>
            <p>
              I am open to full-time roles, internships, and collaborative mobile or web projects. Feel free to reach out directly.
            </p>
          </div>

          {/* Direct Email Action Box */}
          <div className="mac-email-card">
            <div className="email-meta">
              <span className="email-label">DIRECT INBOX</span>
              <span className="email-address">{email}</span>
            </div>
            <div className="email-actions">
              <button
                type="button"
                className={`action-btn copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                className="action-btn send-btn"
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Compose Mail</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="mac-modal-socials-section">
            <span className="section-mini-heading">PROFESSIONAL NETWORKS</span>
            <div className="social-links-grid">
              <a href={Links.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill-card">
                <img src={linkedin} alt="LinkedIn" />
                <div className="pill-text">
                  <span className="pill-title">LinkedIn</span>
                  <span className="pill-desc">Connect professionally</span>
                </div>
              </a>
              <a href={Links.github} target="_blank" rel="noopener noreferrer" className="social-pill-card">
                <img src={github} alt="GitHub" />
                <div className="pill-text">
                  <span className="pill-title">GitHub</span>
                  <span className="pill-desc">Code repositories</span>
                </div>
              </a>
              <a href={Links.discord} target="_blank" rel="noopener noreferrer" className="social-pill-card">
                <img src={discord} alt="Discord" />
                <div className="pill-text">
                  <span className="pill-title">Discord</span>
                  <span className="pill-desc">aiyoyo</span>
                </div>
              </a>
              <a href={Links.instagram} target="_blank" rel="noopener noreferrer" className="social-pill-card">
                <img src={instagram} alt="Instagram" />
                <div className="pill-text">
                  <span className="pill-title">Instagram</span>
                  <span className="pill-desc">@ireneancillaa</span>
                </div>
              </a>
            </div>
          </div>

          {/* Resume Footer Link */}
          <div className="mac-modal-footer">
            <span className="footer-note">Looking for formal credentials?</span>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-pill-link"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>View Curriculum Vitae (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

