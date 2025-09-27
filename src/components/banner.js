import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'
import cv from '../src/assets/file/Irene Ancilla Chow-resume.pdf'

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
                            I am a highly motivated student of Mobile Application and Technology with a strong passion for mobile development, web programming, and UI/UX design. I enjoy turning ideas into user-friendly digital solutions while continuously sharpening my technical and creative skills. I thrive in dynamic environments that value teamwork, problem-solving, and innovation, and I am eager to contribute to impactful projects while growing as a versatile web and mobile developer.
                        </p>
                        <button
                            onClick={() => window.open(cv, "_blank")}
                        >
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