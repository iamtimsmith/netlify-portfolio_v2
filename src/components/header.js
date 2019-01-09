import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './navigation'
import OffCanvas from './offcanvas'

const Header = ({ siteTitle, navigation, social }) => (
  <nav className="navbar clear">
    <div className="container">
      <div className="navbar-start">
        {/* Navbar Brand */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-size-3">
            {siteTitle}
          </Link>
        </div>

        {/* offCanvas Toggle */}
        <button className="offcanvas-toggle" onClick={toggleOffCanvas}>
          <span />
        </button>
        <OffCanvas nav={navigation} social={social} />
      </div>

      {/* Desktop Menu */}
      <Navigation
        navClass="navbar-menu navbar-end"
        itemClass="navbar-item"
        nav={navigation}
      />
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navigation: PropTypes.array,
  social: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  navigation: [],
  social: [],
}

export default Header

const toggleOffCanvas = () => {
  const brand = document.querySelector('.navbar-brand').classList
  const button = document.querySelector('.offcanvas-toggle').classList
  const offcanvas = document.querySelector('.offcanvas').classList
  brand.contains('hidden') ? brand.remove('hidden') : brand.add('hidden')
  button.contains('active') ? button.remove('active') : button.add('active')
  offcanvas.contains('showing')
    ? offcanvas.remove('showing')
    : offcanvas.add('showing')
}
