// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
//
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//
//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   const result = await graphql(
//     `
//       {
//         allWordpressPage(sort: { fields: date, order: DESC }) {
//           edges {
//             node {
//               title
//               slug
//               excerpt
//               date(formatString: "MMMM DD, YYYY")
//             }
//           }
//         }
//       }
//     `
//   )
//
//   if (result.errors) {
//     throw result.errors
//   }
//
//   // Create blog posts pages.
//   const posts = result.data.allWordpressPage.edges
//
//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node
//
//     createPage({
//       path: post.node.slug,
//       component: blogPost,
//       context: {
//         slug: post.node.slug,
//         previous,
//         next,
//       },
//     })
//   })
// }
//
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
