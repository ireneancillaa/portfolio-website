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
      role: 'SASC Senior Mentor Scholarship',
      company: 'BINUS University (West Jakarta)',
      duration: 'Feb 2025 - Jan 2026',
      badge: 'Part-time',
      description:
        'Selected for two consecutive SASC Mentor Scholarship periods (Even 2024/2025 & Senior Mentor Odd 2025/2026). Delivered structured one-on-one and group mentoring sessions to strengthen mentees study strategies, time management, organization, critical thinking, and self-directed learning while tracking progress through regular evaluation.',
      tags: ['Academic Mentoring', '2 Periods', 'Study Strategies', 'Critical Thinking', 'Progress Evaluation']
    },
    {
      id: 'beelingua-mentor',
      role: 'Beelingua Mentor',
      company: 'BINUS University (West Jakarta)',
      duration: 'Apr 2025 - Dec 2025',
      badge: 'Mentorship',
      description:
        'Assisted mentees in completing their Beelingua learning tasks and assignments. Provided guidance when mentees encountered difficulties, monitored progress, followed up on incomplete assignments, and maintained regular communication to keep learners engaged.',
      tags: ['Language Mentoring', 'Student Support', 'Progress Monitoring', 'Communication']
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
    },
    {
      id: 'freshmen-partner-b28',
      role: 'Freshmen Partner (FP) B28',
      company: 'BINUS University (West Jakarta)',
      duration: 'Sep 2024 - May 2025',
      badge: 'Mentorship',
      description:
        'Provided consistent support and guidance to freshmen throughout the First Year Program (FYP). Assisted freshmen in overcoming academic challenges, developing time management and study strategies, and adjusting to university life.',
      tags: ['First Year Program', 'Student Guidance', 'Community Building', 'Time Management']
    },
    {
      id: 'freshmen-leader-b28',
      role: 'Freshmen Leader (FL) B28',
      company: 'BINUS University (West Jakarta)',
      duration: 'Aug 2024 - Sep 2024',
      badge: 'Leadership',
      description:
        'Guided and supported freshmen throughout the Orientation Program (OTP), Week of Welcoming (WOW), and Inauguration. Introduced campus resources, facilities, and key contacts while providing personalized advice on schedules and university transition.',
      tags: ['Orientation Program', 'Peer Mentoring', 'Campus Engagement', 'Communication']
    }
  ]

  const leadershipExperiences = [
    {
      id: 'kmk-gm',
      role: 'General Manager of Event Division',
      company: 'Keluarga Mahasiswa Katolik BINUS University (West Jakarta)',
      duration: 'Feb 2025 - Feb 2026',
      badge: 'Organisational Leadership',
      description:
        'Oversaw operations across all regions, leading cross-regional teams and mentoring regional coordinators and activists. Developed the central theme for KMKJ (KMK Jumat) All Region, bridged communication between leaders and management, and prepared contingency plans for smooth weekly event execution.',
      tags: ['Cross-Regional Leadership', 'Operations Management', 'Mentoring', 'Event Strategy']
    },
    {
      id: 'kmk-vice',
      role: 'Vice Coordinator of Event Division',
      company: 'Keluarga Mahasiswa Katolik BINUS University (West Jakarta)',
      duration: 'Feb 2025 - Feb 2026',
      badge: 'Organisational Leadership',
      description:
        'Assisted the Event Coordinator in planning, executing, and evaluating events aligned with organizational goals. Led event activist teams, managed task distribution and rotations for KMKJ weekly events, and collaborated across divisions on logistics and promotional strategies.',
      tags: ['Event Planning', 'Team Leadership', 'Task Distribution', 'Cross-Division Collaboration']
    },
    {
      id: 'kmk-innova-bench',
      role: 'PIC of Innova Bench Eksternal 2025',
      company: 'Keluarga Mahasiswa Katolik BINUS University',
      duration: 'Jun 2025 - Oct 2025',
      badge: 'Project Lead',
      description:
        'Coordinated the organizing team for the KMK BINUS x KMK UBL external benchmarking event. Developed the event concept and rundown, supervised scheduling, logistics, and technical preparations, and ensured strong inter-organizational knowledge sharing.',
      tags: ['Project Management', 'Event Concept', 'Logistics', 'Inter-Organizational Relations']
    },
    {
      id: 'kmk-easter-funding',
      role: 'Funding Coordinator of Easter KMK 2025',
      company: 'Keluarga Mahasiswa Katolik BINUS University',
      duration: 'Feb 2025 - Apr 2025',
      badge: 'Fundraising & Sponsorship',
      description:
        'Designed and executed fundraising strategies through internal initiatives and external collaborations. Negotiated with sponsors and partners for financial and in-kind support, maintained financial transparency, and exceeded the fundraising target by 10%.',
      tags: ['Fundraising Strategy', 'Sponsorship Negotiation', 'Financial Accountability', 'Partner Relations']
    },
    {
      id: 'kmk-event-activist',
      role: 'Event Activist',
      company: 'Keluarga Mahasiswa Katolik BINUS University (West Jakarta)',
      duration: 'Feb 2024 - Feb 2025',
      badge: 'Event Operations',
      description:
        'Planned and organized structured rundowns for KMKJ (KMK Jumat) with time-slot allocation and backup plans. Created engaging PowerPoint presentations to communicate event concepts and facilitated interactive ice-breaking sessions.',
      tags: ['Communication', 'Leadership', 'Event Rundowns', 'Time Management', 'Facilitation']
    },
    {
      id: 'kmk-media-activist',
      role: 'Media and Communication Activist',
      company: 'Keluarga Mahasiswa Katolik BINUS University (West Jakarta)',
      duration: 'Feb 2024 - Feb 2025',
      badge: 'Media & Design',
      description:
        'Developed cohesive Instagram feeds aligned with KMK branding, typography, and layout consistency. Designed informative event posters with clear messaging, illustrations, and visual hierarchy to attract audience attention.',
      tags: ['Canva', 'Graphic Design', 'Instagram Branding', 'Poster Design']
    },
    {
      id: 'kmk-pmb-coord',
      role: 'Event Coordinator of PMB (Penerimaan Mahasiswa Baru)',
      company: 'Keluarga Mahasiswa Katolik BINUS University (West Jakarta)',
      duration: 'Jul 2024 - Sep 2024',
      badge: 'First Year Program',
      description:
        'Coordinated religious hours and the Week of Welcoming (WOW) party for incoming freshmen. Collaborated with team members on creative concepts, schedules, and on-site logistics to create a welcoming experience for new students.',
      tags: ['Event Coordination', 'On-Site Operations', 'Team Collaboration', 'Freshmen Welcoming']
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
