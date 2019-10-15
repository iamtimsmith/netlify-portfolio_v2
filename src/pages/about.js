import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ContactForm } from '../components/Forms'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      url="/about"
      description={data.markdownRemark.frontmatter.description}
      keywords={data.markdownRemark.frontmatter.keywords} />

    <div className="about">
      <figure className="about__image">
        <Img
          sizes={
            data.markdownRemark.frontmatter.profile_pic.childImageSharp.sizes
          }
          alt="Tim Smith"
        />
      </figure>
      <div
        className='about__text'
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      <div className="about__form">
        <ContactForm />
      </div>
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
            sizes(maxWidth: 200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      html
    }
  }
`
