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
      let work = []
      let blog = []
      posts.forEach(post => {
        if (post.node.fields.type === 'posts') {
          blog.push(post)
        } else if (post.node.fields.type === 'projects') {
          work.push(post)
        }
      })

      let current

      if (post.node.fields.type === 'posts') {
        current = blog.indexOf(post)
      } else if (post.node.fields.type === 'projects') {
        current = work.indexOf(post)
      }

      if (post.node.fields.type == 'posts') {
        createPage({
          path: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous: current === 0 ? null : blog[current - 1].node,
            next: current === blog.length - 1 ? null : blog[current + 1].node,
          },
        })
      } else if (post.node.fields.type == 'projects') {
        createPage({
          path: post.node.fields.slug,
          component: workPost,
          context: {
            slug: post.node.fields.slug,
            previous: current === 0 ? null : work[current - 1].node,
            next: current === work.length - 1 ? null : work[current + 1].node,
          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const type = getNode(node.parent).sourceInstanceName || 'pages'
    let value

    if (type == 'posts') {
      value = '/blog' + createFilePath({ node, getNode })
    } else if (type == 'projects') {
      value = '/work' + createFilePath({ node, getNode })
    } else {
      value = ''
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
