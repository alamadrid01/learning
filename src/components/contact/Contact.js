import React, {useState, useEffect} from 'react'
import './contact.scss'

function Contact() {
  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  

 
  const firstHandler = (e)=>{
    setFirstName(e.target.value);
    setFirstNameError(false);
  }

  const lastNameHandler = e =>{
    setLastName(e.target.value)
    setLastNameError(false)
  }

  const emailHandler = e =>{
    setEmail(e.target.value)
    setEmailError(false)
    
  }
  const messageHandler = e =>{
    setMessage(e.target.value)
    setMessageError(false)
  }

  const submit = e =>{
    e.preventDefault();
    
  switch (true) {
    case firstName == "":
      setFirstNameError(true)
      

    case lastName == "":
      setLastNameError(true)
      
      
    case email == "":
      setEmailError(true)
      
      

    case message == "":
      setMessageError(true)
      
      break;
      
  
    default:
      alert("Message sent successfully")
      break;
  }
  
  }

  return (
    <div>
      <div className='whole'>
        
        <div className="contact">
            <h1>Contact me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={submit}>
              <div className={` ${matches ? 'g':'b'}`}>
                <div className="a c">
                  <label>First name</label>
                  <input className={`${firstNameError ? 'error' : 'noError'}`} autoFocus type="text" placeholder='Enter your first name' value={firstName}  onChange={firstHandler} />
                  {
                    firstNameError && <span>First name is required</span>
                  }
                </div>

                <div className="a d" >
                  <label>Last name</label>
                  <input className={`${lastNameError ? 'error' : 'noError'}`} type="text" placeholder='Enter your last name' value={lastName} onChange={lastNameHandler} />
                  {
                    lastNameError && <span>Last name is required</span>
                  }
                  
                </div>
              </div>

              <div className="a">
                <label>Email</label>
                <input className={`${emailError ? 'error' : 'noError'}`} type="email" placeholder='yourname@email.com' value={email} onChange={emailHandler} />
                {
                  emailError && <span>Email is required</span>
                }
              </div>

              <div className="a">
                <label>Message</label>
                <textarea value={message} className={`${messageError ? 'error' : 'noError'}`} onChange={messageHandler} id="" cols="30" rows="7" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
                {
                  messageError && <span>Message is required</span>
                }
              </div>

              <div className="a e">
                <input required type="checkbox" name="" id="" />
                <label className='check'>You agree to providing your data to Adebayo Al-ameen who may contact you</label>
              </div>

              <button  id='btn__submit' type='submit'>Send message</button>
            </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
