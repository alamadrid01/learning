import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/Contact'
import './contactpage.scss'

export class Contactpage extends Component {
  render() {
    return (
      <div>
        <div className="contactpage">
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Contactpage