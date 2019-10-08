import React, { Component } from 'react'
import { Link } from 'gatsby'
import { MainMenu, SocialMenu } from './Menus'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      clear: this.props.location === 'home'
    }
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    // Get the current state of the offcanvas
    const current = this.state.active;
    // Set it to the opposite of the current state
    this.setState({
      active: !current
    });
  }

  componentDidMount() {
    const home = this.props.location === 'home';
    // On scroll for home, change state
    window.onscroll = () => {
      if (home) {
        let top = window.pageYOffset;
        this.setState({
          clear: top < 551
        })
      }
    }
  }

  render() {
    const { siteTitle, menu, social } = this.props;
    const { active, clear } = this.state;
    return (
      <header className={`header${clear ? '-clear' : ''}`}>
        <div className='header__container'>
          <Link className={`header__logo${active ? '-active' : ''}`} to='/'>{siteTitle}</Link>
          <button className={`header__toggle${active ? '-active' : ''}`} onClick={() => this.toggleActive()}>
            <span className='header__toggle-bars' />
          </button>
          <MainMenu
            className='header__menu'
            menu={menu} />
          <OffCanvas
            className={`header__offcanvas`}
            active={this.state.active}
            menu={menu}
            social={social} />
        </div>
      </header>
    )
  }
}
export default Navbar

const OffCanvas = ({ active, className, menu, social }) => (
  <aside className={`${className}${active ? '-active' : ''}`}>
    <MainMenu className={`${className}-menu`} menu={menu} withHome />
    <SocialMenu className={`${className}-social`} social={social} />
  </aside>
)
