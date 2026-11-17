import React from 'react'
import { Banner } from '../components/banner'
import { AboutSection } from '../components/AboutSection'
import { Projects } from '../components/projects'
import { Experience } from '../components/experience'
import { GitHubStats } from '../components/GitHubStats'
import { Skills } from '../components/skills'

export const Home = ({ onOpenConnect }) => {
  return (
    <>
      <Banner onOpenConnect={onOpenConnect} />
      <AboutSection compact />
      <Projects />
      <Experience />
      <GitHubStats />
      <Skills />
    </>
  )
}
