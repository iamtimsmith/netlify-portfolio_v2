import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Summary from '../components/postsummary'
import SEO from '../components/seo'

export default class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.data.allMarkdownRemark.edges,
      posts: [],
    }
    this.searchPosts = this.searchPosts.bind(this)
  }

  componentDidMount() {
    this.setState({
      posts: this.props.data.allMarkdownRemark.edges,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.data.allMarkdownRemark.edges,
    })
  }

  searchPosts(e) {
    let currentList = []
    let newList = []
    if (e.target.value !== '') {
      currentList = this.props.data.allMarkdownRemark.edges
      newList = currentList.filter(({ node }) => {
        const lcTitle = node.frontmatter.title.toLowerCase()
        const lcTags = node.frontmatter.tags.toLowerCase()
        const filter = e.target.value.toLowerCase()
        let bool = false
        if (lcTitle.includes(filter) || lcTags.includes(filter)) {
          bool = true
        }
        return bool
      })
    } else {
      newList = this.props.data.allMarkdownRemark.edges
    }
    this.setState({
      posts: newList,
    })
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Blog" 
          url="/blog" 
          description="A blog to teach new developers about MERN, Node js, React js, Express js, and Wordpress in a simple and understandable way." 
          keywords="mern stack, react js, node js, wordpress" 
        />
        <div className="container" id="blog">
          <section className="section">
            <h1 className="is-size-2">Blog</h1>
            <form className="form">
              <div className="field">
                <input
                  className="input"
                  type="text"
                  name="search"
                  id="search-bar"
                  placeholder="Search for something..."
                  onChange={this.searchPosts}
                />
              </div>
            </form>
            <div className="columns is-multiline">
              {this.state.posts.map(({ node }) => (
                <div className="column is-4 posts" key={node.id}>
                  <Summary
                    title={node.frontmatter.title}
                    excerpt={node.excerpt}
                    path={node.fields.slug}
                    tags={node.frontmatter.tags.split(' ')}
                    thumb={
                      node.frontmatter.featured_image.childImageSharp.sizes
                    }
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "posts" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            featured_image {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
