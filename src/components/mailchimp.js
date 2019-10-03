import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailchimpSignup extends Component {
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
          <form className={`mailchimp__form-${Object.entries(this.state.response).length === 0 && this.state.response.constructor === Object ? `unsubmitted` : `submitted`}`}>
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

export default MailchimpSignup