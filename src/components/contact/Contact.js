import React, { Component } from 'react'
import './contact.scss'

export class Contact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         message: ''
      }
    }

    handler =(e) =>{
      e.preventDefault();

      this.setState({
        [this.target.name]: e.targe.value
      })
  }

  render() {
    const {firstName, lastName, email, message} = this.state
    return (
      <div className='whole'>
        
        <div className="contact">
            <h1>Contact me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
              <div className="b">
                <div className="a">
                  <label>First name</label>
                  <input type="text" placeholder='Enter your first name' value={firstName}  onChange={this.handler} />
                </div>

                <div className="a">
                  <label>Last name</label>
                  <input type="text" placeholder='Enter your last name' value={lastName} onChange={this.handler} />
                </div>
              </div>

              <div className="a">
                <label>Email</label>
                <input type="email" placeholder='yourname@email.com' value={email} onChange={this.handler} />
              </div>

              <div className="a">
                <label>Message</label>
                <textarea value={message} id="" cols="30" rows="10" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
              </div>

              <div className="a">
                <input type="checkbox" name="" id="" />
                <label>You agree to providing your data Adebayo Al-ameen who may contact you</label>
              </div>

              <button id='btn__submit' type='submit'>Send message</button>

            </form>
        </div>
      </div>
    )
  }
}

export default Contact