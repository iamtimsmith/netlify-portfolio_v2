import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import SocialIcons from './socialicons'

const Offcanvas = ({ nav, social }) => (
  <aside className="card offcanvas">
    <div>
      <ul>
        <li>
          <Link onClick={closeOffCanvas} to="/">
            Home
          </Link>
        </li>
        {nav.map(item => (
          <li key={item.label}>
            <Link onClick={closeOffCanvas} to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <SocialIcons social={social} size="4" />
    </div>
  </aside>
)

Offcanvas.propTypes = {
  nav: PropTypes.array,
  social: PropTypes.array,
}

Offcanvas.defaultProps = {
  nav: [],
  social: [],
}

export default Offcanvas

const closeOffCanvas = () => {
  document.querySelector('.offcanvas-toggle').classList.remove('active')
  document.querySelector('.offcanvas').classList.remove('showing')
}
