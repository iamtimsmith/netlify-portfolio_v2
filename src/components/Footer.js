import React from 'react'
import { MainMenu, SocialMenu } from './Menus'

const Footer = ({ menu, social }) => (
  <footer className="footer">
    <div className="footer__container">
      <SocialMenu
        className='footer__social'
        social={social} />
      <MainMenu
        className='footer__menu'
        menu={menu} />
    </div>
  </footer>
)

export default Footer
