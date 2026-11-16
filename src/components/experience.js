import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('work')

  const workExperiences = [
    {
      id: 'charoen-pokphand',
      role: 'Mobile Programmer Intern',
      company: 'PT Charoen Pokphand (North Jakarta)',
      duration: 'Feb 2026 - Present',
      badge: 'Internship',
      description:
        'Developing and maintaining cross-platform mobile applications using Flutter. Integrating Firebase services for secure authentication and real-time data management, and designing automated report generation workflows with JasperReports.',
      tags: ['Flutter', 'Dart', 'Firebase', 'JasperReports', 'Cross-Platform Mobile']
    },
    {
      id: 'binus-square-promo',
      role: 'Team Promotion',
      company: 'BINUS Square (West Jakarta)',
      duration: 'Sep 2025 - Present',
      badge: 'Creative Media',
      description:
        'Creating and producing promotional videos and social media content for BINUS Square events, campaigns, and campus life. Handling videography, camera operation, photo and video editing, and serving as on-camera talent for short-form content and campus tours.',
      tags: ['Video Production', 'Videography', 'Photo & Video Editing', 'Social Media Content', 'On-Camera Talent']
    },
    {
      id: 'sasc-mentor',
      role: 'SASC Senior Mentor',
      company: 'BINUS University (West Jakarta)',
      duration: 'Feb 2025 - Jan 2026',
      badge: 'Mentorship',
      description:
        'Mentored undergraduate students through one-on-one and group sessions, providing academic guidance and personal support. Helped mentees build study strategies, time management, and problem-solving skills in a motivating learning environment.',
      tags: ['Academic Mentoring', 'Leadership', 'Time Management', 'Problem Solving', 'Communication']
    },
    {
      id: 'binus-square-ambassador',
      role: 'BINUS Square Ambassador (Housing Coordinator)',
      company: 'BINUS Square (West Jakarta)',
      duration: 'Aug 2024 - Aug 2025',
      badge: 'Ambassador',
      description:
        'Coordinated resident engagement programs and technology-focused events for Scientia. Organized community activities to strengthen collaboration and student engagement, while assisting with boarders concerns and daily housing operations.',
      tags: ['Event Coordination', 'Community Engagement', 'Teamwork', 'Housing Operations']
    }
  ]

  const leadershipExperiences = [
    {
      id: 'kmk-gm',
      role: 'General Manager of Event Division',
      company: 'Keluarga Mahasiswa Katolik (KMK)',
      duration: 'Feb 2025 - Present',
      badge: 'Organisational Leadership',
      description:
        'Managing regional operations and cross-regional teams to ensure alignment, quality, and productivity. Coordinating communication between leaders, committees, and management while mentoring coordinators and activists and designing cohesive weekly event themes.',
      tags: ['Operations Management', 'Cross-Regional Leadership', 'Mentoring', 'Event Strategy']
    },
    {
      id: 'kmk-vice',
      role: 'Vice Coordinator of Event Division',
      company: 'Keluarga Mahasiswa Katolik (KMK)',
      duration: 'Feb 2025 - Present',
      badge: 'Organisational Leadership',
      description:
        'Supporting event planning, execution, and evaluation in alignment with organizational goals. Leading and mentoring activist teams across task distribution, collaboration, and interactive activity concepts.',
      tags: ['Event Planning', 'Team Leadership', 'Task Distribution', 'Community Impact']
    },
    {
      id: 'kmk-event-activist',
      role: 'Event Activist',
      company: 'Keluarga Mahasiswa Katolik (KMK)',
      duration: 'Feb 2024 - Feb 2025',
      badge: 'Event Operations',
      description:
        'Organized structured rundowns for KMKJ events with contingency planning and time management. Designed engaging presentations to communicate event goals and led interactive ice-breaking sessions.',
      tags: ['Event Rundowns', 'Time Management', 'Presentation Design', 'Facilitation']
    },
    {
      id: 'kmk-media-activist',
      role: 'Media and Communication Activist',
      company: 'Keluarga Mahasiswa Katolik (KMK)',
      duration: 'Feb 2024 - Feb 2025',
      badge: 'Media & Design',
      description:
        'Designed cohesive Instagram feeds aligned with KMK branding and created event posters with clear messaging and engaging visual layouts.',
      tags: ['Visual Branding', 'Social Media Design', 'Poster Design', 'Content Layout']
    }
  ]

  const educationExperiences = [
    {
      id: 'binus-univ',
      role: 'Bachelor of Computer Science (Mobile Application & Technology)',
      company: 'BINUS University (West Jakarta)',
      duration: 'Sep 2023 - Aug 2027',
      badge: 'GPA 3.75 / 4.00',
      description:
        'Undergraduate student in Computer Science specializing in Mobile Application & Technology. Awarded the SASC Mentor Scholarship in Semester 4 and 5, as well as the BINUS Square Ambassador (BSA) Scholarship.',
      tags: ['Mobile Application & Technology', 'Swift', 'Kotlin', 'Flutter', 'UI/UX Design', 'SASC & BSA Scholar']
    }
  ]

  const currentList =
    activeTab === 'work'
      ? workExperiences
      : activeTab === 'leadership'
      ? leadershipExperiences
      : educationExperiences

  return (
    <section className="section-container" id="experience">
      <Container>
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-category-tag">Career Journey & Milestones</span>
          <h2 className="section-main-heading">Experience & Leadership</h2>
          <p className="section-description">
            Work experience in mobile engineering, creative media, and student mentoring, alongside organisational leadership at KMK and Computer Science studies at BINUS University.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="experience-category-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'work'}
            className={`exp-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work & Internships ({workExperiences.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'leadership'}
            className={`exp-tab-btn ${activeTab === 'leadership' ? 'active' : ''}`}
            onClick={() => setActiveTab('leadership')}
          >
            Leadership & Organisations ({leadershipExperiences.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'education'}
            className={`exp-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education ({educationExperiences.length})
          </button>
        </div>

        {/* Timeline Dossier Cards */}
        <div className="timeline-dossier-list">
          {currentList.map((item) => (
            <article key={item.id} className="timeline-dossier-card">
              <div className="dossier-card-top">
                <div className="dossier-title-col">
                  <h3 className="dossier-role-title">{item.role}</h3>
                  <span className="dossier-company-name">{item.company}</span>
                </div>
                <div className="dossier-badges-group">
                  <span className="dossier-meta-badge" style={{ color: '#818cf8', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                    {item.badge}
                  </span>
                  <span className="dossier-meta-badge">{item.duration}</span>
                </div>
              </div>

              <p className="dossier-desc-text">{item.description}</p>

              <div className="dossier-tags-row">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="dossier-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
