import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bulma'
import '../scss/app.scss'
import Header from './header'
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
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              navigation={this.state.siteNav}
              social={this.state.socialMedia}
            />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {this.props.children}
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
