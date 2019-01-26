import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Helmet from 'react-helmet'
import icon32 from '../images/favicon-32x32.png'
import Header from './header'
import Footer from './footer'
library.add(fab, fas)

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteNav: [
        { label: 'About', href: '/about' },
        { label: 'Work', href: '/work' },
        { label: 'Blog', href: '/blog' },
      ],
      socialMedia: [
        { icon: 'codepen', href: 'http://codepen.io/iamtimsmith/' },
        {
          icon: 'linkedin',
          href: 'https://www.linkedin.com/in/tim-smith-1a651aa0',
        },
        { icon: 'twitter', href: 'https://twitter.com/iam_timsmith' },
        { icon: 'github', href: 'https://github.com/iamtimsmith' },
        { icon: 'dev', href: 'https://dev.to/iam_timsmith' },
      ],
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      var top = window.pageYOffset
      var navbar = document.querySelector('.is-home .navbar')
      if (this.props.location === 'home') {
        if (top < 550) {
          navbar.classList.add('clear')
        } else {
          navbar.classList.remove('clear')
        }
      }
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                siteUrl
              }
            }
          }
        `}
        render={data => (
          <div className={`is-${this.props.location}`}>
            <Helmet title={data.site.siteMetadata.title}>
              <link rel="shortcut icon" type="image/png" href={icon32} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:image"
                content={`${data.site.siteMetadata.siteUrl}${
                  this.props.slug
                }twitter-card.jpg`}
              />
            </Helmet>

            <Header
              siteTitle={data.site.siteMetadata.title}
              navigation={this.state.siteNav}
              social={this.state.socialMedia}
            />
            <div className="content">{this.props.children}</div>
            <Footer
              navigation={this.state.siteNav}
              social={this.state.socialMedia}
            />
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: 'page',
}

export default Layout
