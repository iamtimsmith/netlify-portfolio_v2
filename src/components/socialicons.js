import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const SocialIcons = ({ social, size }) => (
  <ul className="social">
    {social.map(icon => (
      <li key={icon.icon}>
        <a
          href={icon.href}
          style={{ fontSize: `${size}rem` }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', icon.icon]} />
        </a>
      </li>
    ))}
  </ul>
)

SocialIcons.propTypes = {
  social: PropTypes.array,
  size: PropTypes.string,
}

SocialIcons.defaultProps = {
  social: [],
  size: '4',
}

export default SocialIcons
