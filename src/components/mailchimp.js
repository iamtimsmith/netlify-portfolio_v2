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
      <section className={`section is-mailchimp ${Object.entries(this.state.response).length === 0 && this.state.response.constructor === Object ? `not-submitted` : `is-submitted`}`}>
        <div className="container">
          <h4>Sign up to get the newest blog posts delivered to you!</h4>
          <form>
            <div className="field">
              <p className={`has-text-${this.state.response.result}`}>{this.state.response.msg}</p>
              <div className="control">
                <input type="text" className="input" name="email" placeholder="kevin.malone@dundermifflin.com" onChange={this.onChange} />
              </div>
              <div className="control">
                <button className="button" onClick={e => this.onSubmit(e)}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default MailchimpSignup