import React, { Component } from 'react'

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      response: { type: ``, message: `message` },
      name: ``,
      email: ``,
      message: ``,
      botfield: ``,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit() {
    const { name, email, message } = this.state;
    setTimeout(() => {
      // Check to make sure fields aren't empty
      if (name && email && message) {
        // Clear the form if submitted
        document.querySelector('.contact-form__form').reset()
        // Set submitted to true and provide message to user
        this.setState({
          submitted: true,
          response: { type: `-success`, message: `Thanks for reaching out to me. I'll be in contact as soon as possible!` },
          name: ``,
          email: ``,
          message: ``
        });
      } else {
        // If error, provide error message to user.
        this.setState({
          submitted: true,
          response: { type: `-error`, message: `You need to fill out all of the fields to submit the form!` }
        })
      }
    }, 1000);
  }

  render() {
    const { response } = this.state;
    return (
      <div className='contact-form'>
        <iframe name="hide" title="hidden" className="contact-form__hidden" />
        <form
          className='contact-form__form'
          name='contact'
          target='hide'
          method='POST'
          id='contact'
          data-netlify='true'
          data-netlify-honeypot='bot-field'>
          <p className={`contact-form__response${response.type}`}>{response.message}</p>
          <input className='contact-form__hidden' type="hidden" name='botfield' />
          <input className='contact-form__name' type="text" name="name" placeholder="Name" onChange={e => this.onChange(e)} />
          <input className='contact-form__email' type="text" name="email" placeholder="Email" onChange={e => this.onChange(e)} />
          <textarea className='contact-form__message' name="message" placeholder="Your Message" onChange={e => this.onChange(e)} />
          <input className='contact-form__submit' type="submit" name="submit" value='Hire Me!' onClick={() => this.onSubmit()}
          />
        </form>
      </div>
    )
  }
}