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
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                    Home
                </Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                    Skills
                </Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                    Projects
                </Nav.Link>
            </Nav>
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
                    <span>
                        Let's Connect
                    </span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
