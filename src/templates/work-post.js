import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

class WorkPost extends Component {
  constructor(props) {
    super(props)
    this.workScroll = this.workScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.workScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.workScroll)
  }

  workScroll(e) {
    const top = window.pageYOffset
    const workContent = document.querySelector('.section:nth-child(2)')
    if (document.body.contains(workContent)) {
      if (top > workContent.offsetTop - 200) {
        workContent.classList.add('display')
      }
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const prev =
      this.props.pageContext.previous !== null &&
      this.props.pageContext.previous.fields.slug.includes('/work/') ? (
        <Link
          to={this.props.pageContext.previous.fields.slug}
          className="is-size-5"
          id="last"
        >
          Last
        </Link>
      ) : (
        ''
      )
    const next =
      this.props.pageContext.next !== null &&
      this.props.pageContext.next.fields.slug.includes('/work/') ? (
        <Link
          to={this.props.pageContext.next.fields.slug}
          className="is-size-5"
          id="next"
        >
          Next
        </Link>
      ) : (
        ''
      )

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.keywords}
          url={post.fields.slug}
          image={post.frontmatter.thumbOne.childImageSharp.sizes.src}
        />
        <div
          className="container"
          id="portfolioPage"
          onScroll={this.handleScroll}
        >
          <section className="section has-text-centered">
            {/* Title and tags */}
            <h1 className="is-size-2 post-header">{post.frontmatter.title}</h1>
            <span className="line" />
            <p className="is-size-5 post-tags">{post.frontmatter.tags}</p>

            {/* Description */}
            <div
              id="portContent"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* Links to next item and last item */}
            {prev}
            {next}
          </section>
          <section className="section">
            {/* Mouse scroll animation */}
            <div className="mouse" id="mouse">
              <span className="divide" />
              <span className="wheel" />
            </div>

            <div className="columns">
              <div className="column" id="img1">
                <Img
                  sizes={post.frontmatter.fullPage.childImageSharp.sizes}
                  alt={`${post.frontmatter.title} frontpage`}
                />
              </div>
              <div className="column" id="img2">
                <Img
                  sizes={post.frontmatter.thumbOne.childImageSharp.sizes}
                  alt={`${post.frontmatter.title} mockup one`}
                />
                <Img
                  sizes={post.frontmatter.thumbTwo.childImageSharp.sizes}
                  alt={`${post.frontmatter.title} mockup two`}
                />
              </div>
            </div>
            <div className="columns is-centered">
              <a
                href={post.frontmatter.url}
                className="column button is-large is-one-third"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default WorkPost

export const query = graphql`
  query WorkPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        tags
        url
        keywords
        thumbOne {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        thumbTwo {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        fullPage {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
