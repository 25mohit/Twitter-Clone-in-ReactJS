import React, { useState } from 'react'
import './TweetField.css'
import me from '../images/me1.jpg'
import gificon from '../images/gif-icon.png'
import callender from '../images/icons8-calendar-100.png'
import gps from '../images/icons8-gps-96.png'
import smilie from '../images/icons8-smiling-100.png'
import imageicon from '../images/image-icon.png'
import { useDispatch } from 'react-redux'


export const TweetField = () => {
    

  const [status, setStatus] = useState('')
  const dispatch = useDispatch()

  const statusTextArea = (e) => {
        setStatus(e.target.value)
        const btColor = document.getElementById("tweet-bt")
      btColor.style.backgroundColor=e.target.value.length?"rgb(29,155,240)" : "rgb(142,205,248)";
    
    }

    const postTweet = () => {
          dispatch({
                type: 'TWEET',
                  payload:{
                        id : (new Date).getTime(),
                        status
                  }
          })
    }
  return (
    <div  className="tweets-div-feed">
        <div className='user-news-feed-div'>
          <div className="post-text-field-div">
                <div className="profile-photo-user-post">
                        <img src={me} alt="" />
                </div>
                <div className="text-field-div-user">
                      <textarea name="" id="status-textarea" value={status}  placeholder="What's happening?" onChange= { statusTextArea }></textarea>
                              <hr />
                            <div className="status-post-div">
                                    <div className='status-text-field-small-icons'>
                                          <img src={gificon} alt="" />
                                          <img src={callender} alt="" />
                                          <img src={smilie} alt="" />
                                          <img src={imageicon} alt="" />
                                          <img src={gps} alt="" />
                                    </div>
                                    <div className="tweet-bt">
                                          <button id='tweet-bt' onClick={ postTweet }>Tweet</button>
                                    </div>
                            </div>
                </div>
          </div>
    </div>
    </div>
  )
}
