import React from 'react'
import Link from '../components/Link-tree/Link'
import Profile from '../components/profile/Profile'
import './homepage.scss'

function Homepage() {
  return (
    <div>
      <div className="homepage">
        <Profile/>
        <Link />
      </div>
    </div>
  )
}

export default Homepage
