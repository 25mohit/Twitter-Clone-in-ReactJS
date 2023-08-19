import React, { useState } from 'react'
import './TweetModel.css'
import me1 from '../images/me1.jpg'
import { useDispatch } from 'react-redux'

export const TweetModel = ({ cModel }) => {
        const dispatch = useDispatch()
        const [status, setStatus] = useState('')
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
    <div className='tweet-model-window' onClick={(e) => {
                if(e.target.classList.contains('tweet-model-window')){
                        cModel(false)
                }
    } }>
            <div className="container">
                    <div className='x-bt'><button onClick={() => {cModel(false)}}>X</button></div>
                    <div className='message-div'>
                            <div className='user-img'>
                                    <img src={ me1 } alt="" />
                            </div>
                            <div className='text-area'>
                                <textarea name="" value={ status } onChange={ e => setStatus(e.target.value)}></textarea>
                            </div>
                    </div>
                    <div className='tweet-bt-div'>
                        <button  className='tweet-bt' onClick={ postTweet }>Tweet</button>
                    </div>
            </div>
    </div>
  )
}
