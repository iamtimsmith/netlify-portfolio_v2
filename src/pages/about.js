import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contactform'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      description={data.site.siteMetadata.description}
      keywords={data.site.siteMetadata.keywords}
      url="https://www.iamtimsmith.com/about"
    />
    <div className="container" id="about">
      <section className="section">
        <div className="headshot" id="animate-img">
          <Img
            sizes={
              data.markdownRemark.frontmatter.profile_pic.childImageSharp.sizes
            }
            alt="Tim Smith"
          />
        </div>
      </section>
      <section className="section">
        <div className="columns">
          <div
            className="column info"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <div className="column">
            <Contact buttonText="Hire Me!" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        keywords
      }
    }
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
        profile_pic {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      html
    }
  }
`
