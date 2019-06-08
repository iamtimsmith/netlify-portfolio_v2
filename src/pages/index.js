import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Item from '../components/portfolioitems'
import Contact from '../components/contactform'
import Theme from '../styles/helpers/Theme'
import Button from '../styles/elements/Button'
import { HeroSection, WorkSection, ContactSection } from '../styles/components/HomePage';

const IndexPage = ({ data }) => (
  <Layout location="home">
    <SEO title="Home" />
    <HeroSection>
      <Img sizes={data.heroImg.childImageSharp.sizes} />
      <div>
        <h1>Freelance Web Developer.</h1>
        <p>Person.</p>
        <AnchorLink
          href="#contact"
          className="scroll"
          data-speed="1000"
        >
          <Button color={Theme.Primary} hollow>
            Hire Me!
          </Button>
        </AnchorLink>
      </div>
    </HeroSection>

    <WorkSection>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Item
          key={node.frontmatter.title}
          name={node.frontmatter.title}
          tags={node.frontmatter.tags}
          url={node.fields.slug}
          img={node.frontmatter.thumbOne.childImageSharp.sizes}
        />
      ))}
    </WorkSection>
    <ContactSection>
      <div className="columns is-centered">
        <div className="column is-6">
          <Contact buttonText="Hire Me!" />
        </div>
      </div>
    </ContactSection>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    heroImg: file(relativePath: { eq: "mountain.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    site {
      siteMetadata {
        description
        keywords
      }
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
                sizes(maxWidth: 1200) {
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
