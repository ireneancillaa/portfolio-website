import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        // Wait a small timeout to let the DOM settle
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
        return () => clearTimeout(timer)
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
