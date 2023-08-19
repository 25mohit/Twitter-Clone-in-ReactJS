import React from 'react'
import './Tweets.css'
import me from '../images/me1.jpg'
import heart from '../images/tweet-post/heart-icon.png'
import message from '../images/tweet-post/message.png'
import statis from '../images/tweet-post/statis-icon.png'
import triangle from '../images/tweet-post/triangle-icon.png'
import arrow from '../images/tweet-post/two-arrow.png'
import upload from '../images/tweet-post/upload-icon.png'
import { useDispatch } from 'react-redux'

export const Tweets = ({tweet}) => {
        const dispatch = useDispatch()
        const deleteTweet = (id) => {
                dispatch({
                        type:'REMOVE_TWEET',
                        payload: id
                })

        }
  return (
    <div className='tweet-card-div'>
         {
                tweet ?
                <div className="tweet-card">
                        <div className="colum-first">
                                    <img src={me} alt="" />
                        </div>
                        <div className="colum-second">
                                        <div className="second-colum-1">
                                                <div className="tweet-head">
                                                        <h2 className="name">mohit agarwal</h2>
                                                        <h2 className="user-name">@mo_hit24 . Now</h2>
                                                </div>
                                                <div className="menu-icon">
                                                        {/* <img src={threedot} alt="" /> */}
                                                        <button onClick={ () => {
                                                                deleteTweet(tweet.id)
                                                        } }>X</button>
                                                </div>
                                        </div>
                                        <div className="second-colum-2">
                                                    <p className='post-text-p'>{tweet.status}</p> 
                                        </div>
                                        <div className="second-colum-3">
                                                    <img src={ message } alt="" />
                                                    <img src={ arrow } alt="" />
                                                    <img src={ heart } alt="" />
                                                    <img src={ upload } alt="" />
                                                    <img src={ statis } alt="" />
                                                    <span><img src={ triangle } alt="" /><p>Tip</p></span>
                                        </div>
                                        <hr />
                        </div>

                </div>
                  : null
          }
    </div>
  )
}
