import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {
    SiBabel,
    SiWebpack,
    SiReact,
    SiNpm,
    SiRails,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiPostgresql,
    SiGoogle, 
    SiYelp
}
    from 'react-icons/si'

const projects = () => {
    return (
        <Container style={{ marginTop: '100px' }}>
            <h1 className="text-center">Projects</h1>
            <CardDeck style={{marginTop: '20px'}}>
                <Card border="light">
                    <Card.Body>

                        <Card.Title>
                            scratch-react
                        
                        </Card.Title>
                        <Card.Text>
                            scratch-react is used to launch minimal boilerplate React.js applications.
                            scratch-react uses React, babel, webpack and is published to npm, downloadable via
                            npx.
                            <br />
                            
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <SiBabel /> <SiReact /> <SiWebpack /> <SiNpm />
                    </Card.Footer>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <Card.Title>Ordered</Card.Title>
                        <Card.Text>
                            Ordered is a restaurant homepage and eCommerce platform. Ordered is built with a Ruby on Rails
                            backend API, postgreSQL database, React.js (JavaScript E6) frontend utilizing the react-bootstrap
                            component library. Custom build user authentication and CSS3 styling. 
                            <br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <SiReact /> <SiRails /> <SiPostgresql /> <SiJavascript /><SiHtml5 /> <SiBootstrap />
                    </Card.Footer>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <Card.Title>Where Did You Eat</Card.Title>
                        <Card.Text>
                            Where Did You Eat is a restaurant visit logging application. Built with Ruby on Rails, using Google
                            OAuth2, search results provided by Yelp's API, SQLite3 database, and bootstrap css styling
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <SiRails /> <SiGoogle /> <SiYelp /> <SiBootstrap />
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
    )
}

export default projects
