import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import bar1 from '../assets/img/bar1.svg'
import bar2 from '../assets/img/bar2.svg'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1 style={{ fontWeight: 'bold' }}>
                                Skills
                            </h1>
                            <p>
                                Skilled in mobile app development, UI/UX design, and design thinking, with strong communication, leadership, and problem solving.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={bar1} alt="skill-bar1" />
                                    <h5>
                                        Mobile App Developer
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={bar1} alt="skill-bar1" />
                                    <h5>
                                        UI/UX Design
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={bar2} alt="skill-bar2" />
                                    <h5>
                                        Design Thinking
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={bar1} alt="skill-bar1" />
                                    <h5>
                                        Communication
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={bar2} alt="skill-bar2" />
                                    <h5>
                                        Leadership
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={bar1} alt="skill-bar1" />
                                    <h5>
                                        Problem Solving
                                    </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}