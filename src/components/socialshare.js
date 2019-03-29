import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialShare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shareLinks: [
        {
          url: `https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`,
          type: 'fab',
          website: 'facebook',
        },
        {
          url: `https://twitter.com/home?status=${this.props.url}`,
          type: 'fab',
          website: 'twitter',
        },
        {
          url: `https://www.linkedin.com/shareArticle?mini=true&url=${
            this.props.url
          }`,
          type: 'fab',
          website: 'linkedin',
        },
        {
          url: `https://pinterest.com/pin/create/button/?url=${
            this.props.url
          }&media=${this.props.image}&description=${this.props.title}`,
          type: 'fab',
          website: 'pinterest',
        },
        {
          url: `mailto:?&body=Check%20this%20article%20out!%0A%0A${
            this.props.url
          }`,
          type: 'fas',
          website: 'envelope',
        },
      ],
    }
    this.openWindow = this.openWindow.bind(this)
    this.socialScroll = this.socialScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.socialScroll)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.socialScroll)
  }

  socialScroll(e) {
    const top = window.pageYOffset
    const bottom = top + window.innerHeight
    const socialEl = document.querySelector('#post-content')

    if (document.body.contains(socialEl)) {
      const socialContent =
        document.querySelector('#post-content').offsetTop + 550
      const footer = document.querySelector('footer.footer').offsetTop - 200
      const socialShare = document.querySelector('#socialShare')
      console.log(`Bottom: ${bottom}, Footer: ${footer}`)

      if (top > socialContent && bottom < footer) {
        socialShare.classList.add('is-shareable')
      } else {
        socialShare.classList.remove('is-shareable')
      }
    }
  }

  openWindow(url) {
    window.open(url, 'popup', 'width=600,height=600')
    return false
  }

  render() {
    return (
      <div id="socialShare" style={{ visibility: 'hidden' }}>
        <div className="columns is-mobile">
          {this.state.shareLinks.map(link => (
            <a
              key={link.website}
              className={`column button is-${link.website}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={[link.type, link.website]} size="2x" />
            </a>
          ))}
        </div>
      </div>
    )
  }
}

export default SocialShare
