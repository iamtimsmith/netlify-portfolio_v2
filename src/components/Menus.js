import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainMenu = ({ className, menu, withHome }) => (
  <ul className={className}>
    {withHome && (
      <li className={`${className}-item`}>
        <Link
          className={`${className}-link`}
          to='/'>Home</Link>
      </li>
    )}
    {menu.map(item => (
      <li className={`${className}-item`} key={item.label}>
        <Link
          className={`${className}-link`}
          to={item.href}>{item.label}</Link>
      </li>
    ))}
  </ul>
)

export const SocialMenu = ({ className, social }) => (
  <ul className={className}>
    {social.map(item => (
      <li className={`${className}-item`} key={item.icon}>
        <a
          className={`${className}-link`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', item.icon]} />
        </a>
      </li>
    ))}
  </ul>
);

