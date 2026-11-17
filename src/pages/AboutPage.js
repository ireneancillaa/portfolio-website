import React from 'react'
import { AboutSection } from '../components/AboutSection'
import { GitHubStats } from '../components/GitHubStats'

export const AboutPage = () => {
  return (
    <div className="page-route-enter" style={{ paddingTop: '90px' }}>
      <AboutSection />
      <GitHubStats />
    </div>
  )
}
