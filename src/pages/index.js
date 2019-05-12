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
      <h2>List of Posts</h2>
      {nodes.map(node => {
        const { title, slug, text } = node
        const { excerpt } = text.childMarkdownRemark
        return (
          <div key={slug}>
            <h3>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </h3>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
