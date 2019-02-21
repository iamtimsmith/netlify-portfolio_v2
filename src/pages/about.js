import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contactform'
import Resume from './about/Resume.pdf'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" url="/about" description={data.markdownRemark.frontmatter.description} keywords={data.markdownRemark.frontmatter.keywords} />
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
          <div className="column info">
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <a href={Resume} className="button" target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </div>
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
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
        description
        keywords
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
