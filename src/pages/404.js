import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Summary from '../components/postsummary'

const NotFoundPage = ({ data }) => (
  <Layout location="404">
    <section className="section is-medium has-text-centered">
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>
        I'm afraid the page you're looking for isn't available. Here are some
        blog posts that might interest you though...
      </p>
    </section>
    <section className="section container">
      <div className="columns">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="column is-4 posts" key={node.id}>
            <Summary
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              path={node.fields.slug}
              tags={node.frontmatter.tags.split(' ')}
              thumb={node.frontmatter.featured_image.childImageSharp.sizes}
            />
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "posts" } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            featured_image {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
