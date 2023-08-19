import React, { useEffect, useState } from 'react'
import './LeftPannel.css'
import home from '../images/home.png'
import bell from '../images/bell.png'
import hash from '../images/hash.jpg'
import menu from '../images/menu.png'
import message from '../images/message.png'
import notes from '../images/notes.png'
import userImg from '../images/user.png'
import bookmark from '../images/bookmark.png'
import me1 from '../images/me1.jpg'
import threedot from '../images/threedot.png'
import { Link } from 'react-router-dom'
import { TweetModel } from '../tweetModel/TweetModel'
import { LogoutCard } from '../logoutCard/LogoutCard'
import { useSelector } from 'react-redux'


export const LeftPannel = () => {
  const [showModel, setShowModel] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  const user = useSelector(state => state.loggedInUser)
  const showTweet = () => {
      setShowModel(true)
  }
  const showLogoutModel = () => {
    setShowLogout(true)
  }
 
    document.addEventListener("scroll", myFunction);
    function myFunction() {
        setShowLogout(false)
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
            <li><img src={userImg} /><Link to='/profile'>Profiles</Link></li>
            <li><img src={menu} alt="" />More </li>
        </ul>
        <button className='tweet-bt' onClick={ showTweet }>Tweet</button>
        {
            showModel && <TweetModel cModel = { setShowModel } />
        }
            <div className='profile-logout-div' >
                <div className='profile-photo'>
                  <img src={me1} />
                      <div className='username'  onClick={ showLogoutModel } >
                            <p className="profile-name">{ user && user.name}</p>
                            <p className="profile-username">@24_{ user && user.name }</p>
                      </div>
                    
                </div>
                <div className='menu-icon-profile'>
                  <img src={ threedot } alt="" />
                </div>
            </div>
            {
                              showLogout && <LogoutCard setShowLogout = { setShowLogout }/>
                            }
    </div>
  )
}
