import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from './image'
import { useSpring, animated, config } from 'react-spring'


const Hero = () => {
    const firstFade = useSpring({
        config: config.slow,
        from: { opacity: 0 },
        to: { opacity: 1 },
    })
    const secondFade = useSpring({
        config: config.slow,
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000
    })
    const thirdFade = useSpring({
        config: config.slow,
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000
    })
    const fourthFade = useSpring({
        config: config.slow,
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3000
    })
    return (
        <Jumbotron fluid className="bg-dark" style={{ marginTop: 100 }}>
            <Row>
                <Col>
                    <animated.h1 style={firstFade}>Nick Baughman</animated.h1>
                    <animated.h5 style={secondFade}>Software Engineer</animated.h5>
                    <animated.p style={thirdFade}>JavaScript - React - Ruby - Rails</animated.p>
                </Col>
                <Col>
                    <Image />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <animated.div style={fourthFade} >
                    <Col  >
                        <Button variant="outline-secondary" style={{ margin: 8 }} href="/resume.html">
                            Resume
                        </Button>
                        <Button variant="outline-secondary" style={{ margin: 8 }}>
                            Contact
                        </Button>
                    </Col>
                </animated.div>
            </Row>
        </Jumbotron>
    )
}

export default Hero