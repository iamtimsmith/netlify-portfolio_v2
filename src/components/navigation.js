import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Navigation = ({ navClass, itemClass, showHome, nav }) => (
  <ul className={navClass}>
    {showHome && (
      <li className={itemClass}>
        <Link to="/">Home</Link>
      </li>
    )}
    {nav.map(item => (
      <li key={item.label} style={{ marginTop: 0 }} className={itemClass}>
        <Link to={item.href}>{item.label}</Link>
      </li>
    ))}
  </ul>
)

Navigation.propTypes = {
  navClass: PropTypes.string,
  itemClass: PropTypes.string,
  showHome: PropTypes.bool,
  nav: PropTypes.array,
}

Navigation.defaultProps = {
  navClass: '',
  itemClass: '',
  showHome: false,
  nav: [],
}

export default Navigation
