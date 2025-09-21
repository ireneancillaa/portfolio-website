import { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Links } from './links'
import logo from '../assets/img/logo.svg'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import discord from '../assets/img/discord.svg'

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
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Navbar
      expand="lg"
      className={scrolled ? 'scrolled' : ''}
      expanded={isOpen}
      fixed="top"
    >
      <Container>
        {!isMobile && (
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        )}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleMenu}
          className="custom-toggler"
        >
          {isOpen ? <span className="navbar-icon">&times;</span> : <span className="navbar-icon">&#9776;</span>}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`offcanvas-nav ${isOpen ? 'active' : ''}`}
        >
          {isOpen && isMobile && (
            <button className="close-btn" onClick={toggleMenu}>
              &times;
            </button>
          )}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
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
              <button className="vvd" onClick={() => console.log('connect')}>
                <span>Let's Connect</span>
              </button>
            </span>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
