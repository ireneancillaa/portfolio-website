import React, { useEffect, useState, useRef } from 'react'
import './SkillCircle.css'

export const SkillCircle = ({ percentage }) => {
  const [currentPercent, setCurrentPercent] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const currentRef = containerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(entry.target) // Trigger animation only once
        }
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isIntersecting) return

    let startTime = null
    const duration = 1500 // Animation duration in milliseconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const current = Math.min(Math.floor((progress / duration) * percentage), percentage)
      
      setCurrentPercent(current)

      if (progress < duration) {
        requestAnimationFrame(animate)
      }
    }

    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isIntersecting, percentage])

  const radius = 70
  const circumference = 2 * Math.PI * radius // ~439.82

  return (
    <div className="skill-circle-wrapper" ref={containerRef}>
      <svg className="skill-circle-svg" viewBox="0 0 160 160">
        <defs>
          <linearGradient id="skillProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F1217" />
            <stop offset="50%" stopColor="#836DD0" />
            <stop offset="100%" stopColor="#276ADF" />
          </linearGradient>
        </defs>
        {/* Track Circle */}
        <circle
          className="skill-circle-bg"
          cx="80"
          cy="80"
          r={radius}
          strokeWidth="20"
          fill="transparent"
        />
        {/* Animated Progress Circle */}
        <circle
          className={`skill-circle-progress ${isIntersecting ? 'animate' : ''}`}
          cx="80"
          cy="80"
          r={radius}
          strokeWidth="20"
          fill="transparent"
          strokeDasharray={circumference}
          style={{
            '--stroke-dashoffset': circumference - (circumference * percentage) / 100
          }}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
        />
        {/* Centered Text */}
        <text
          x="80"
          y="85"
          className="skill-circle-text"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {currentPercent}%
        </text>
      </svg>
    </div>
  )
}
