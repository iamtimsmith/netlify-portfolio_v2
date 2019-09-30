import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import favicon from '../../content/images/favicon-white.png'

function SEO({ description, lang, meta, keywords, title, url, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        /* Assign Variables with default values */
        const metaDescription = description
          ? description
          : data.site.siteMetadata.description
        const imgUrl = image
          ? data.site.siteMetadata.siteUrl + image
          : data.site.siteMetadata.siteUrl + '/default.jpeg'
        const link = url
          ? data.site.siteMetadata.siteUrl + url
          : data.site.siteMetadata.siteUrl
        const keywordList = keywords
          ? keywords
          : data.site.siteMetadata.keywords
        const newTitle = title === 'Home' ? data.site.siteMetadata.title : title

        /* Create Elements */
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              { rel: 'canonical', href: link },
              { rel: 'shortcut icon', href: '/favicon-white.png' },
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: newTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: imgUrl,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: link,
              },
              {
                property: `og:site_name`,
                content: data.site.siteMetadata.title,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:image`,
                content: imgUrl,
              },
              {
                name: `twitter:image:alt`,
                content: newTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `keywords`,
                content: keywordList,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        keywords
      }
    }
  }
`
