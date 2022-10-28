import React from 'react'
import './profile.scss'
import me from './me.jpg'


function Profile() {
  return (
    <div>
      <div className="profile">
        <img id='profile__img' src={me} alt="" />
        <p id='twitter'>@AdebayoAlameen</p>
        <p id='slack'>alamadrid</p>
      </div>
    </div>
  )
}

export default Profile
