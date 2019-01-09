import React from 'react'
import PropTypes from 'prop-types'
import SocialIcons from './socialicons'
import Navigation from './navigation'

const Footer = ({ navigation, social }) => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <SocialIcons size="2.5" social={social} />
        </div>
      </div>
      <Navigation
        navClass="columns is-centered"
        itemClass="column is-narrow"
        showHome={true}
        nav={navigation}
      />
    </div>
  </footer>
)

Footer.propTypes = {
  navigation: PropTypes.array,
  social: PropTypes.array,
}

Footer.defaultProps = {
  navigation: [],
  social: [],
}

export default Footer
