import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiBookOpen, FiCode, FiMapPin } from 'react-icons/fi'
import profilePhoto from '../assets/img/profile-photo.jpg'

export const AboutSection = ({ compact = false }) => {
  const highlights = [
    {
      icon: <FiBookOpen size={18} aria-hidden="true" />,
      label: 'BINUS University (2023 - 2027)',
      value: 'B.Sc. Computer Science (GPA 3.75 / 4.00)'
    },
    {
      icon: <FiCode size={18} aria-hidden="true" />,
      label: 'Current Industry Role',
      value: 'Mobile Programmer Intern @ PT Charoen Pokphand'
    },
    {
      icon: <FiAward size={18} aria-hidden="true" />,
      label: 'Scholarships',
      value: 'SASC Mentor (2 Periods) & BINUS Square Ambassador'
    },
    {
      icon: <FiMapPin size={18} aria-hidden="true" />,
      label: 'Based In',
      value: 'West Jakarta, Indonesia'
    }
  ]

  return (
    <section className="section-container" id="about">
      <Container>
        <div className="section-header-block">
          <span className="section-category-tag">Background &amp; Story</span>
          <h2 className="section-main-heading">About Me</h2>
          <p className="section-description">
            Mobile Application &amp; Technology undergraduate combining cross-platform engineering, creative media production, and student mentorship.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-photo-frame">
            <img
              src={profilePhoto}
              alt="Irene Ancilla Chow"
              className="about-photo-img"
              loading="lazy"
            />
          </div>

          <div className="about-content-col">
            <h3 className="about-sub-heading">
              Building thoughtful mobile and web products from concept to release.
            </h3>
            <p className="about-paragraph">
              I am an undergraduate Computer Science student majoring in Mobile Application &amp; Technology at BINUS University. My work focuses on turning everyday ideas into reliable, user-friendly software across Flutter, Swift, Kotlin, and React.
            </p>
            {!compact && (
              <p className="about-paragraph">
                Alongside engineering cross-platform apps with Firebase and JasperReports at PT Charoen Pokphand, I produce campus media as Team Promotion at BINUS Square and have mentored peers across SASC, Beelingua, and First Year Program cohorts while leading event operations at Keluarga Mahasiswa Katolik (KMK) BINUS University.
              </p>
            )}

            <div className="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-card">
                  <div className="about-highlight-icon">{item.icon}</div>
                  <div className="about-highlight-text">
                    <span className="about-highlight-label">{item.label}</span>
                    <span className="about-highlight-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {compact && (
              <div className="about-cta-row">
                <Link to="/about" className="btn-hero-secondary">
                  <span>Explore Full About &amp; GitHub Stats</span>
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
