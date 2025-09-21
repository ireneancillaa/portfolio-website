import { Container, Row } from 'react-bootstrap'

export const Footer = () => {
    return (
        <footer className="footer bg-home">
            <Container>
                <Row>
                    <div className="footer-content">
                        <hr className="footer-divider" />
                        <p className="footer-text">
                            © 2025 Irene Ancilla Chow. All rights reserved.
                        </p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}