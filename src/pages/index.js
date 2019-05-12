import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>List of Posts</h1>
      {edges.map(edge => {
        const { title } = edge.node.frontmatter
        const { excerpt, fields } = edge.node
        const { slug } = fields
        return (
          <div key={title}>
            <h2>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </h2>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
