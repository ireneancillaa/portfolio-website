import { Container, Row } from 'react-bootstrap'
import { Links } from './links'
import logo from '../assets/img/logo.svg'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import discord from '../assets/img/discord.svg'

export const Footer = () => {
    return (
        <footer className="footer bg-home">
            <Container>
                <Row>
                    <div className="footer">
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
                        <hr className="footer-divider" />
                        <p className="footer-text">© 2025 Irene Ancilla Chow. All Rights Reserved.</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}