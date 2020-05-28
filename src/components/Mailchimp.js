import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MailchimpSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      response: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    addToMailchimp(this.state.email)
      .then(data => {
        this.setState({
          response: data
        })
        document.querySelector('.is-mailchimp form').reset()
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    return (
      <section className='mailchimp'>
        <div className='mailchimp__container'>
          <p className='mailchimp__title'>Sign up to get the newest blog posts delivered to you!</p>
          <form className={`mailchimp__form-${ Object.entries(this.state.response).length === 0 && this.state.response.constructor === Object ? `unsubmitted` : `submitted` }`}>
            <div className='mailchimp__fields'>
              <p className='mailchimp__message'>{this.state.response.msg}</p>
              <input className="mailchimp__input" type="text" name="email" placeholder="kevin.malone@dundermifflin.com" onChange={this.onChange} />
              <button className="mailchimp__button" onClick={e => this.onSubmit(e)}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}


export class MailchimpPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      response: {},
      showing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const cookie = document.cookie;
      // Check to see if cookie is set
      if (!cookie.includes('signedup')) {
        // If it's not set, show modal after 20 seconds
        this.setState({
          showing: true
        });
        // document.querySelector('html').classList.add('is-clipped');
      }
    }, 5000);

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal(e, decline = false) {
    e.preventDefault();
    document.querySelector('html').classList.remove('is-clipped');
    if (decline) {
      let date = new Date();
      let expire = new Date();
      expire.setDate(date.getDate() + 30);
      document.cookie = `signedup=yep; expires=${ expire }; path=/`;
    }
    this.setState({
      showing: false
    })
  }

  onSubmit(e) {
    e.preventDefault()

    // Add to mailchimp
    addToMailchimp(this.state.email)
      .then(data => {
        this.setState({
          response: data
        })
        document.querySelector('.is-mailchimp form').reset();

        // Add cookie for modal
        if (data.result !== 'error') {
          let date = new Date();
          let expire = new Date();
          expire.setDate(date.getDate() + 1000);
          document.cookie = `signedup=yep; expires=${ expire }; path=/`;
          document.querySelector('html').classList.remove('is-clipped');
          setTimeout(() => {
            this.setState({
              showing: false
            })
          }, 2000);
        }
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    const { showing } = this.state;
    return (
      <div className={`mailchimp-popup${ showing ? '-active' : '' }`}>
        <button className="mailchimp-popup__close" onClick={(e) => this.closeModal(e, true)}>
          <FontAwesomeIcon icon={['fas', 'slash']} />
          <FontAwesomeIcon icon={['fas', 'slash']} />
        </button>
        <div className="mailchimp-popup__container">
          <p className="mailchimp-popup__title">Sign up to get the newest blog posts delivered to you!</p>
          <form className="mailchimp-popup__form">
            <input
              type="email"
              className="mailchimp-popup__email"
              name="email"
              placeholder="kevin.malone@dundermifflin.com"
              onChange={this.onChange} />
            <button
              className="mailchimp-popup__button"
              onClick={e => this.onSubmit(e)} >Submit</button>
            <p
              className="mailchimp-popup__cancel"
              onClick={(e) => this.closeModal(e, true)}>No thanks, I'll keep checking back.</p>
          </form>
        </div>
      </div >
    )
  }
}