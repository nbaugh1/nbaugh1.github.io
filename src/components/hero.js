import React from 'react'
import Link from 'gatsby'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from './image'
import Resume from '../files/Nick-Baughman-Resume.pdf'
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
                    <animated.p style={fourthFade}> - Writes code, builds web apps, blogger, full stack developer,
                    dog dad, reader, podcast listener
                    </animated.p>
                </Col>
                <Col>
                    <Image className="hero-image" />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", padding: '30px' }}>
                <animated.div style={fourthFade} >
                    <Col  >
                        <a href={Resume} download><Button variant="outline-secondary" style={{ margin: 8 }}>
                            Download CV
                        </Button></a>{` `}

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--resume"
                            href={`mailto: nbaugh1@gmail.com`}
                        ><Button variant="outline-secondary" style={{ margin: 8 }}>
                                Contact
                        </Button></a>
                    </Col>
                </animated.div>
            </Row>
        </Jumbotron>
    )
}

export default Hero