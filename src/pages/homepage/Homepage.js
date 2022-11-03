import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Link from '../../components/Link-tree/Link'
import Profile from '../../components/profile/Profile'
import './homepage.scss'

function Homepage() {
  return (
    <div>
      <div className="homepage">
        <Header />
        <Profile/>
        <Link />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
