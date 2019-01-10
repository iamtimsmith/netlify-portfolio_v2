import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout location="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="section hero is-large has-text-centered">
      <Img sizes={data.heroImg.childImageSharp.sizes} />
      <div className="text">
        <h1 className="is-size-1">Freelance Web Developer.</h1>
        <p className="is-size-3">Person.</p>
        <AnchorLink
          href="#contact"
          className="button is-medium scroll"
          data-speed="1000"
        >
          Hire Me!
        </AnchorLink>
      </div>
    </section>

    <section className="section" style={{ background: 'white', zIndex: 3 }} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>
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
  }
`
