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

    firstHandler =(e) =>{
      this.setState({
        firstName: e.target.value
      })
  }
    secondHandler =(e) =>{
      this.setState({
        lastName: e.target.value
      })
  }
    thirdHandler =(e) =>{
      this.setState({
        email: e.target.value
      })
  }
    fourthHandler =(e) =>{
      this.setState({
        message: e.target.value
      })
  }
  submitHandler = (e) =>{
    e.preventDefault()
    alert('Message successfully sent')
  }

  render() {
    const {firstName, lastName, email, message} = this.state
    return (
      <div className='whole'>
        
        <div className="contact">
            <h1>Contact me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={this.submitHandler}>
              <div className="b">
                <div className="a c">
                  <label>First name</label>
                  <input autoFocus type="text" placeholder='Enter your first name' value={firstName}  onChange={this.firstHandler} />
                </div>

                <div className="a d">
                  <label>Last name</label>
                  <input type="text" placeholder='Enter your last name' value={lastName} onChange={this.secondHandler} />
                </div>
              </div>

              <div className="a">
                <label>Email</label>
                <input type="email" placeholder='yourname@email.com' value={email} onChange={this.thirdHandler} />
              </div>

              <div className="a">
                <label>Message</label>
                <textarea value={message} onChange={this.fourthHandler} id="" cols="30" rows="7" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
              </div>

              <div className="a e">
                <input required type="checkbox" name="" id="" />
                <label className='check'>You agree to providing your data Adebayo Al-ameen who may contact you</label>
              </div>

              <button  id='btn__submit' type='submit'>Send message</button>
            </form>
        </div>
      </div>
    )
  }
}

export default Contact