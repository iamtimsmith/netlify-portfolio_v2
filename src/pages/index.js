import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Item from '../components/portfolioitems'
import { ContactForm } from '../components/Forms'

const IndexPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <Layout location="home">
      <SEO title="Home" />
      <section className="section hero is-large has-text-centered">
        <Img sizes={page.frontmatter.hero_image.childImageSharp.sizes} />
        <div className="text">
          <h1 className="is-size-1">{page.frontmatter.hero_headline}</h1>
          <p className="is-size-3">{page.frontmatter.hero_subheadline}</p>
          <AnchorLink
            href={page.frontmatter.hero_cta_link}
            className="button is-medium scroll"
            data-speed="1000"
          >
            {page.frontmatter.hero_cta_text}
          </AnchorLink>
        </div>
      </section>

      <section className="portfolio-items columns is-multiline">
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
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Home" } }) {
      frontmatter {
        title
        description
        keywords
        hero_image {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        hero_headline
        hero_subheadline
        hero_cta_text
        hero_cta_link
      }
      html
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { type: { eq: "projects" } }
        frontmatter: { published: { eq: true } }
      }
      limit: 6
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            thumbOne {
              childImageSharp {
                sizes(maxWidth: 600) {
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
