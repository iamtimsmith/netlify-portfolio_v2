/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const workPost = path.resolve('./src/templates/work-post.js')
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Blog Posts
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      if (post.node.fields.type == 'posts') {
        createPage({
          path: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous:
              previous !== null && previous.fields.slug.includes('/blog/')
                ? previous
                : null,
            next,
          },
        })
      } else if (post.node.fields.type == 'projects') {
        createPage({
          path: post.node.fields.slug,
          component: workPost,
          context: {
            slug: post.node.fields.slug,
            previous:
              previous !== null && previous.fields.slug.includes('/work/')
                ? previous
                : null,
            next,
          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const type = getNode(node.parent).sourceInstanceName
    let value

    if (type == 'posts') {
      value = '/blog' + createFilePath({ node, getNode })
    } else if (type == 'projects') {
      value = '/work' + createFilePath({ node, getNode })
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: `type`,
      node,
      value: type,
    })
  }
}
