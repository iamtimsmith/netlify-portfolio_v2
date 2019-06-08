import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navigation from './navigation'
import OffCanvas from './offcanvas'
import Navbar from '../styles/components/Navbar'
import Container from '../styles/elements/Container'
import ToggleOffcanvas from '../styles/components/ToggleOffcanvas'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offcanvasOpen: false
    }
    this.toggleOffCanvas = this.toggleOffCanvas.bind(this)
  }

  toggleOffCanvas() {
    const toggle = this.state.offcanvasOpen
    this.setState({
      offcanvasOpen: !toggle
    })
  }

  render() {
    return (
      <Navbar scrollPosition={this.props.scrollPosition} page={this.props.page}>
        <Container>
          {/* Navbar Brand */}
          <Link to="/">
            {this.props.siteTitle}
          </Link>

          <ToggleOffcanvas onClick={this.toggleOffCanvas} open={this.state.offcanvasOpen}>
            <span />
          </ToggleOffcanvas>
          <OffCanvas nav={this.props.navigation} social={this.props.social} open={this.state.offcanvasOpen} />

          <Navigation
            nav={this.props.navigation}
          />
        </Container>
      </Navbar>
    )
  }
}

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

// const toggleOffCanvas = () => {
//   const brand = document.querySelector('.navbar-brand').classList
//   const button = document.querySelector('.offcanvas-toggle').classList
//   const offcanvas = document.querySelector('.offcanvas').classList
//   brand.contains('hidden') ? brand.remove('hidden') : brand.add('hidden')
//   button.contains('active') ? button.remove('active') : button.add('active')
//   offcanvas.contains('showing')
//     ? offcanvas.remove('showing')
//     : offcanvas.add('showing')
// }
