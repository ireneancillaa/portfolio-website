import { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Links } from './links'
import logo from '../assets/img/logo.svg'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import discord from '../assets/img/discord.svg'
import cv from '../assets/file/resume.pdf'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const onResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const onUpdateActiveLink = (value) => setActiveLink(value)
  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }
  const closeMenu = () => setIsOpen(false)

  return (
    <Navbar
      expand="lg"
      className={scrolled ? 'scrolled' : ''}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {isMobile && (
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
            className="custom-toggler"
          >
            <span className="navbar-icon">&#9776;</span>
          </Navbar.Toggle>
        )}

        <div
          id="basic-navbar-nav"
          className={isMobile ? `offcanvas-nav ${isOpen ? 'active' : ''}` : 'navbar-collapse'}
        >
          {isOpen && isMobile && (
            <button className="close-btn" onClick={closeMenu}>
              &times;
            </button>
          )}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('home')
                if (isMobile) closeMenu()
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('skills')
                if (isMobile) closeMenu()
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('projects')
                if (isMobile) closeMenu()
              }}
            >
              Projects
            </Nav.Link>
          </Nav>

          {!isMobile && (
            <span className="navbar-text">
              <div className="social-icon">
                <a href={Links.github} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" />
                </a>
                <a href={Links.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="" />
                </a>
                <a href={Links.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="" />
                </a>
                <a href={Links.discord} target="_blank" rel="noopener noreferrer">
                  <img src={discord} alt="" />
                </a>
              </div>
              <button className="vvd" onClick={() => window.open(cv, "_blank")}>
                <span>Let's Connect</span>
              </button>
            </span>
          )}
        </div>
      </Container>
    </Navbar>
  )
}
