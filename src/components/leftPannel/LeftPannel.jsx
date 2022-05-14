import React, { useState } from 'react'
import './LeftPannel.css'
import home from '../images/home.png'
import bell from '../images/bell.jpg'
import hash from '../images/hash.jpg'
import menu from '../images/menu.png'
import message from '../images/message.png'
import notes from '../images/notes.png'
import user from '../images/user.png'
import bookmark from '../images/bookmark.png'
import me1 from '../images/me1.jpg'
import threedot from '../images/threedot.png'
import { Link } from 'react-router-dom'
import { TweetModel } from '../tweetModel/TweetModel'
import { LogoutCard } from '../logoutCard/LogoutCard'


export const LeftPannel = () => {
  const [showModel, setShowModel] = useState(false)
  const showTweet = () => {
      setShowModel(true)
  }
  return (
    <div className='main-left-pannel-div'>
        <ul>
            <li><img src={home} alt="" /> Home</li>
            <li><img src={hash} alt="" /> Explore</li>
            <li><img src={bell} alt="" />Notification</li>
            <li><img src={message} alt="" />Messages</li>
            <li><img src={bookmark} alt="" />Bookmarks</li>
            <li><img src={notes} alt="" />Lists</li>
            <li><Link to='/profile'><img src={user} alt="" />Profiles</Link></li>
            <li><img src={menu} alt="" />More </li>
        </ul>
        <button className='tweet-bt' onClick={ showTweet }>Tweet</button>
        {
            showModel && <TweetModel cModel = { setShowModel } />
        }
            <div className='profile-logout-div'>
                <div className='profile-photo'>
                  <img src={me1} />
                      <div className='username'>
                            <p className="profile-name">mohit agarwal</p>
                            <p className="profile-username">@mo_hit24</p>
                            <LogoutCard />
                      </div>
                </div>
                <div className='menu-icon-profile'>
                  <img src={ threedot } alt="" />
                </div>
            </div>
    </div>
  )
}
