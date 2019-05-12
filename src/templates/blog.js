import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogTemplate = props => {
  const { title, text } = props.data.contentfulBlogPost
  const { html } = text.childMarkdownRemark
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogTemplate
