import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Mobile App Developer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        if (isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to Irene's Portfolio
                        </span>
                        <h1 style={{ fontSize: '3rem' }}>
                            {`Hello I'm Irene Ancilla Chow`}
                        </h1>
                        <span className="wrap" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            {text}
                        </span>
                        <p>
                            I am a highly motivated Mobile Application and Technology student with a strong passion for learning, teamwork, and innovation. I have been actively involved in various organizational activities, where I developed skills in communication, leadership, and event coordination. I am eager to contribute to impactful projects and grow in a dynamic tech environment.
                        </p>
                        <button onClick={() => console.log('connect')}>
                            Let's Connect 
                            <ArrowRightCircle size={25}/>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}