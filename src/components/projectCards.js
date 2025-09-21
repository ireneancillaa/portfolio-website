import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, desc, imgURL, link }) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='proj-imgbx'>
                    <img src={imgURL} alt='img-url'/>
                    <div className='proj-txtx'>
                        <h4>{title}</h4>
                        <span>{desc}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}