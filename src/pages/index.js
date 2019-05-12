import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        nodes {
          slug
          title
          text {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  `)
  const { nodes } = data.allContentfulBlogPost
  return (
    <Layout>
      <h1>List of Posts</h1>
      {nodes.map(node => {
        const { title, slug, text } = node
        const { excerpt } = text.childMarkdownRemark
        return (
          <div key={slug}>
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
