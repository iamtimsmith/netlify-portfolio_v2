import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailchimpPopup extends Component {
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
        document.querySelector('html').classList.add('is-clipped');
        // If it's not set, show modal after 20 seconds
        this.setState({
          showing: true
        })
      }
    }, 5000);

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal(e) {
    e.preventDefault();
    document.querySelector('html').classList.remove('is-clipped');
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
          document.cookie = `signedup=yep; expires=${expire}; path=/`;
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
    return (
      <div className={`is-mailchimp-popup modal ${this.state.showing ? `is-active` : ``}`}>
        <div className="modal-background" onClick={(e) => this.closeModal(e)}></div>
        <div className="modal-content">
          <div className="box">
            <p className="has-text-centered">Sign up to get the newest blog posts delivered to you!</p>
            <form>
              <div className="field">
                <p className={`has-text-centered ${this.state.response.result === 'error' ? `has-text-danger` : `has-text-success`}`}>{this.state.response.msg}</p>
                <div className="control">
                  <input type="email" className="input" name="email" placeholder="kevin.malone@dundermifflin.com" onChange={this.onChange} />
                </div>
                <div className="control">
                  <button className="button" onClick={e => this.onSubmit(e)}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default MailchimpPopup