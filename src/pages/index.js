import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
        const { excerpt } = edge.node
        return (
          <div key={title}>
            <h2>{title}</h2>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
