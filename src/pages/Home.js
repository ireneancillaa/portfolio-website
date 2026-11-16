import React from 'react'
import { Banner } from '../components/banner'
import { Projects } from '../components/projects'
import { Experience } from '../components/experience'
import { Skills } from '../components/skills'

export const Home = ({ onOpenConnect }) => {
  return (
    <>
      <Banner onOpenConnect={onOpenConnect} />
      <Projects />
      <Experience />
      <Skills />
    </>
  )
}
