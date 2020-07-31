import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const Footer = () => {
    const twitterUrl = "https://twitter.com/Nbaugh1"
    const githubUrl = "https://github.com/nbaugh1"
    const linkedInUrl = "https://www.linkedin.com/in/nickbaughman/"
    const email = "nbaugh1@gmail.com"
    return (
        <footer>
            <Navbar fixed="bottom">
                <Nav>
                    Nick Baughman © 2020, Built with Gatsby.js
                    </Nav>
                <Nav className="ml-auto">
                    <div style={{ margin: 4 }}>
                        <a href={githubUrl}><AiFillGithub /></a>
                    </div>
                    <div style={{ margin: 4 }}>
                        <a href={twitterUrl}><AiFillTwitterCircle /></a>
                    </div>
                    <div style={{ margin: 4 }}>
                        <a href={linkedInUrl}><AiFillLinkedin /></a>
                    </div>
                    <div style={{ margin: 4 }}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--resume"
                            href={`mailto:${email}`}
                        ><AiFillMail />
                        </a>

                    </div>
                </Nav>
            </Navbar>
        </footer>
    )
}

export default Footer
