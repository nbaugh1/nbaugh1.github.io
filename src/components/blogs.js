import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'


const Blogs = () => {
    const blogs = useStaticQuery(
        graphql`
            query{
                allFeedNpbDevBlog(limit: 5) {
                  edges {
                    node {
                      title
                      contentSnippet
                      guid
                      pubDate
                    }
                  }
                }
              }
            
        `
    )

    return (
        <Container fluid style={{ marginTop: 100 }}>
            <h3 className="text-center">Latest Blog Posts</h3>
            {blogs.allFeedNpbDevBlog.edges.map((blog) =>
                <div>
                    <br />
                    <h5><a href={blog.node.guid}>{blog.node.title}</a></h5>
                    <p>{blog.node.contentSnippet}</p>
                    <small className="text-muted">{blog.node.pubDate}</small>
                </div>
            )}
        </Container>
    )
}

export default Blogs


