const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)
  const blogTemplate = path.resolve(`src/templates/blog.js`)

  result.data.allContentfulBlogPost.nodes.forEach(({ slug }) => {
    createPage({
      path: `/posts/${slug}`,
      component: blogTemplate,
      context: {
        slug,
      },
    })
  })
}
