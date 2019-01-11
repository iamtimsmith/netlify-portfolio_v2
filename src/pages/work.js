import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Item from '../components/portfolioitems'

export default ({ data }) => (
  <Layout>
    <section className="portfolio-items has-margin-top columns is-multiline">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Item
          key={node.frontmatter.title}
          name={node.frontmatter.title}
          tags={node.frontmatter.tags}
          url={node.fields.slug}
          img={node.frontmatter.thumbOne.childImageSharp.sizes}
        />
      ))}
    </section>
  </Layout>
)

export const workQuery = () => graphql`
  query workQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___priority], order: ASC }
      filter: { fields: { type: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
            tags
            thumbOne {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
