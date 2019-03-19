import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const UsesPage = ({ data }) => (
  <Layout>
    <SEO
      title="Uses"
      url="/uses"
      description={data.markdownRemark.frontmatter.description}
      keywords={data.markdownRemark.frontmatter.keywords}
    />
    <section className="section">
      <div className="container">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </section>
  </Layout>
)

export default UsesPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Uses" } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`
