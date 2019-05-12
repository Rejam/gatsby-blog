const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const blogTemplate = path.resolve(`src/templates/blog.js`)

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", result)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields
    createPage({
      path: `/posts/${slug}`,
      component: blogTemplate,
      context: {
        slug,
      },
    })
  })
}
