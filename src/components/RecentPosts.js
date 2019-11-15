import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Summary from './BlogSummary';

export default ({ currentPost = "" }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter:{fields:{type:{eq:"posts"}}, frontmatter:{published:{eq:true}}},
          limit:4,
          sort: {fields:frontmatter___date, order: DESC}
        ) {
          edges {
            node {
              frontmatter {
                title
                featured_image {
                  childImageSharp {
                    sizes(maxWidth: 400) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
                description
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges.filter(({ node }) => node.fields.slug !== currentPost);
      if (posts.length > 3) {
        posts.pop();
      }

      return (
        <div className="container recent-posts">
          <p className="recent-posts__title">More Posts</p>
          <div className="recent-posts__posts">
            {posts.map(({ node }) => (
              <Summary
                path={node.fields.slug}
                thumb={node.frontmatter.featured_image.childImageSharp.sizes}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                tags={node.frontmatter.tags.split(' ')}
                key={node.fields.slug} />
            ))}
          </div>
        </div>
      )
    }
    }
  />
)