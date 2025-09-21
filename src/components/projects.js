import { Container, Row, Col } from 'react-bootstrap'
import { ProjectCard } from './projectCards'
import colorSharp2 from '../assets/img/color-sharp2.svg'
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'

export const Projects = () => {
    const projects = [
        {
            title: 'Christian Wijaya',
            desc: 'E-commerce Website developed using HTML',
            imgURL: project1,
            link: 'https://github.com/ireneancillaa/ChristianWijaya'
        },
        {
            title: 'Moodly',
            desc: 'Mobile App developed using Swift',
            imgURL: project2,
            link: 'https://github.com/ireneancillaa/Moodly'
        },
        {
            title: 'VHS Vault',
            desc: 'Mobile App developed using Flutter',
            imgURL: project3,
            link: 'https://github.com/ireneancillaa/VHS_Vault'
        },
        {
            title: 'DoJo Movie',
            desc: 'Mobile App developed using Kotlin',
            imgURL: project4,
            link: 'https://github.com/ireneancillaa/DoJoMovie'
        }
    ]
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ fontWeight: 'bold' }}>
                            Projects
                        </h1>
                        <p>
                            I usually work as a Front-End Developer in my projects, but I also have experience handling Full-Stack development.
                        </p>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='backgorund-right' />
        </section>
    )
}