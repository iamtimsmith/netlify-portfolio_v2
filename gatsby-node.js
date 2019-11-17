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
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
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
    const posts = result.data.allMdx.edges
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

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    // Get node type. If none can be found, default to page
    const type = getNode(node.parent).sourceInstanceName || 'pages'
    let value
    // If the file is a post
    if (type == 'posts') {
      // Remove date from slug
      let path = createFilePath({ node, getNode }).split('-');
      path.splice(0, 3);
      // Pass correct slug for path
      value = '/blog/' + path.join('-')
    }
    // If the file is a project
    else if (type == 'projects') {
      value = '/work' + createFilePath({ node, getNode })
    }
    // Otherwise, should be rendered as a page.
    else {
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
