import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Share from '../components/socialshare'
import SEO from '../components/seo'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout location="blog" slug={post.fields.slug}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          keywords={post.frontmatter.keywords}
          url={post.fields.slug}
          image={post.frontmatter.featured_image.childImageSharp.sizes.src}
        />
        <div id="blog-post" itemScope itemType="http://schema.org/TechArticle">
          <section className="hero is-large">
            <Img
              sizes={post.frontmatter.featured_image.childImageSharp.sizes}
              alt={post.frontmatter.title}
            />
          </section>
          <section className="section">
            <div className="container">
              <h1 className="is-size-1" itemProp="title">
                {post.frontmatter.title}
              </h1>
              <div className="columns">
                <div className="column is-narrow">
                  <p className="is-size-5">{post.frontmatter.date}</p>
                </div>
              </div>

              <hr />
              <br />
              <div
                id="post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
            <Share
              url={`https://www.iamtimsmith.com/${post.fields.slug}`}
              image={`https://www.iamtimsmith.com/${
                post.frontmatter.featured_image.childImageSharp.sizes.src
              }`}
              title={post.frontmatter.title}
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        keywords
        description
        featured_image {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        tags
      }
    }
  }
`
