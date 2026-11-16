import React from 'react'
import { Container } from 'react-bootstrap'
import {
  SiHtml5,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiSqlite,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiReact
} from 'react-icons/si'
import { FiCode, FiSmartphone, FiLayout, FiCpu } from 'react-icons/fi'

export const Skills = () => {
  const techMarqueeItems = [
    { icon: <SiSwift size={22} />, name: 'Swift' },
    { icon: <SiSwift size={22} />, name: 'SwiftUI' },
    { icon: <SiKotlin size={22} />, name: 'Kotlin' },
    { icon: <SiFlutter size={22} />, name: 'Flutter' },
    { icon: <SiReact size={22} />, name: 'React.js' },
    { icon: <SiFigma size={22} />, name: 'Figma' },
    { icon: <SiSqlite size={22} />, name: 'SQLite' },
    { icon: <SiFirebase size={22} />, name: 'Firebase' },
    { icon: <SiGithub size={22} />, name: 'GitHub' },
    { icon: <SiHtml5 size={22} />, name: 'HTML5 & CSS3' },
    { icon: <FiCode size={22} />, name: 'VS Code' }
  ]

  const duplicatedMarquee = [...techMarqueeItems, ...techMarqueeItems]

  const skillCategories = [
    {
      title: 'iOS & Mobile Platforms',
      subtitle: 'Native and Cross-Platform Engineering',
      icon: <FiSmartphone />,
      skills: [
        { name: 'Swift & SwiftUI', focus: 'Native iOS UI & State' },
        { name: 'iOS SDK & Core Data', focus: 'Persistence & Local Store' },
        { name: 'Firebase', focus: 'Auth & Realtime Data' },
        { name: 'Kotlin & Jetpack Compose', focus: 'Native Android Architecture' },
        { name: 'Flutter & Dart', focus: 'BLoC Pattern & Cross-Platform' },
        { name: 'SQLite & Local Storage', focus: 'Offline-First Caching' }
      ]
    },
    {
      title: 'Web & Frontend Engineering',
      subtitle: 'Modern Component Systems & Web Apps',
      icon: <FiCode />,
      skills: [
        { name: 'React.js', focus: 'Functional components & hooks' },
        { name: 'Modern JavaScript (ES6+)', focus: 'Async workflows & state' },
        { name: 'HTML5 & Semantic Web', focus: 'Accessibility & SEO' },
        { name: 'CSS3 / Modern Layouts', focus: 'Flexbox, CSS Grid & animations' },
        { name: 'REST APIs & Fetch', focus: 'Data fetching & JSON parsing' },
        { name: 'Responsive Web Design', focus: 'Mobile-first breakpoints' }
      ]
    },
    {
      title: 'UI/UX & Design Systems',
      subtitle: 'Human-Centered Digital Product Design',
      icon: <FiLayout />,
      skills: [
        { name: 'Figma & FigJam', focus: 'High-fidelity mockups & wireframes' },
        { name: 'Design Systems', focus: 'Tokens, component libraries, typography' },
        { name: 'User Research & Personas', focus: 'Qualitative interviews & testing' },
        { name: 'Interactive Prototyping', focus: 'Micro-interactions & user flows' },
        { name: 'Information Architecture', focus: 'Site mapping & content hierarchy' }
      ]
    },
    {
      title: 'Developer Tools & Practices',
      subtitle: 'Reliable Workflows & Environments',
      icon: <FiCpu />,
      skills: [
        { name: 'Xcode & Instruments', focus: 'iOS debugging & profiling' },
        { name: 'Android Studio', focus: 'Android build tools & emulator' },
        { name: 'Git & GitHub Workflows', focus: 'Version control & collaboration' },
        { name: 'JasperReports', focus: 'Automated report generation' },
        { name: 'Agile & Design Thinking', focus: 'Sprint planning & user iteration' }
      ]
    }
  ]

  return (
    <section className="section-container" id="skills">
      <Container>
        {/* Subtle Tech Marquee */}
        <div className="tech-marquee-container" aria-label="Technology Stack Ticker">
          <div className="tech-marquee-track">
            {duplicatedMarquee.map((item, idx) => (
              <div key={idx} className="tech-marquee-item">
                <span className="tech-marquee-icon">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header-block mt-4">
          <span className="section-category-tag">Technical Competencies</span>
          <h2 className="section-main-heading">Skills & Architecture Ecosystem</h2>
          <p className="section-description">
            Technical capabilities and design disciplines developed through industry internships, Mobile Application &amp; Technology coursework at BINUS University, and real-world projects.
          </p>
        </div>

        {/* Categorized Ecosystem Grid */}
        <div className="tech-ecosystem-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="ecosystem-category-card">
              <div className="ecosystem-card-header">
                <div className="ecosystem-card-icon">{cat.icon}</div>
                <div className="ecosystem-card-title-group">
                  <h3>{cat.title}</h3>
                  <span>{cat.subtitle}</span>
                </div>
              </div>

              <div className="ecosystem-skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="ecosystem-skill-item">
                    <div className="skill-info-left">
                      <span className="skill-glyph-icon">✦</span>
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-badge">{skill.focus}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
