import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Navbar from './Navbar'
import Footer from './Footer'
import 'bulma'
import '../scss/app.scss'
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
    };
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
          <div className={`is-${ this.props.location }`}>
            <Navbar
              siteTitle={data.site.siteMetadata.title}
              menu={this.state.siteNav}
              social={this.state.socialMedia}
              location={this.props.location}
            />
            <div className="content">{this.props.children}</div>
            <Footer
              menu={this.state.siteNav}
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
