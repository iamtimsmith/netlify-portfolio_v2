import React from 'react'
import { MainMenu, SocialMenu } from './Menus'

const Footer = ({ menu, social }) => (
  <footer className="footer">
    <div className="footer__container">
      <MainMenu
        className='footer__menu'
        menu={menu} />
      <SocialMenu
        className='footer__social'
        social={social} />
    </div>
  </footer>
)

export default Footer
