import React from 'react'
import Container from 'react-bootstrap/Container'

const About = () => {
    return (
        <Container fluid style={{ marginTop: 100 }}>
            <h1 style={{ textAlign: 'center', borderBottom: 'solid' }}>About Me</h1>
            <h2>Technical Skills</h2>
            <h3>Programming Languages</h3>
            <p>Ruby</p>
            <p>JavaScript</p>
            <p>SQL</p>
            <p>GraphQL</p>
            <p>HTML5</p>
            <p>CSS</p>
            <h3>Frameworks and Libraries</h3>
            <p>Ruby on Rails</p>
            <p>React.Js</p>
            <p>Sinatra</p>
            <p>React Bootstrap</p>
            <p>Gatsby.Js</p>
            <p>Redux</p>
            <h3>Design Patterns, Concepts, and Tools</h3>
            <p>Object Oriented Programming</p>
            <p>MVC</p>
            <p>RESTful APIs</p>
            <p>Clean Coding</p>
            <p>Test Driven Development</p>
            <p>JAMStack</p>
            <p>Git</p>
            <p>Heroku</p>
            <p>Netlify</p>
            <p>Sanity.io</p>
        </Container>
    )
}

export default About
