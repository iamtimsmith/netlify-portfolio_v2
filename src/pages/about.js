import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ContactForm } from '../components/Forms'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      url="/about"
      description={data.mdx.frontmatter.description}
      keywords={data.mdx.frontmatter.keywords} />

    <div className="about">
      <figure className="about__image">
        <Img
          sizes={
            data.mdx.frontmatter.profile_pic.childImageSharp.sizes
          }
          alt="Tim Smith"
        />
      </figure>
      <div className="about__text">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <div className="about__form">
        <ContactForm />
      </div>
    </div>
  </Layout>
)
export default AboutPage

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "About" } }) {
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
      body
    }
  }
`
