module.exports = {
  siteMetadata: {
    title: `Tim Smith`,
    siteUrl: 'https://www.iamtimsmith.com',
    description: `Tim Smith is a full-stack developer and web designer focused on making the web a more enjoyable place to be`,
    author: `@iam_timsmith`,
    keywords: `freelance, web developer, full stack developer web, react developer, wordpress developer`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-85334980-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/dashboard/**'],
        siteSpeedSampleRate: 10,
        cookieDomain: 'iamtimsmith.com',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tim Smith`,
        short_name: `Tim Smith`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `static/favicon-white.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'pre-title',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                  enclosure: {
                    'url': `https://www.iamtimsmith.com/${edge.node.frontmatter.featured_image.childImageSharp.fluid.src}`,
                    'size': 1000,
                  }
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fields: { type: { eq: "posts" } } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date(formatString: "MMMM DD, YYYY")
                      featured_image {
                        childImageSharp {
                          fluid {
                            src 
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Tim Smith RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://iamtimsmith.us16.list-manage.com/subscribe/post?u=a07cf4738b9ea78d4718b8f8a&amp;id=845beac7c2',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
