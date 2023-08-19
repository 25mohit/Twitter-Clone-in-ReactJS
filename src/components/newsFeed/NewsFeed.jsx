import React from 'react'
import { TweetField } from '../tweetField/TweetField'
import { Tweets } from '../tweets/Tweets'
import './NewsFeed.css'

export const NewsFeed = () => {

  return (
      <div>
            <TweetField />
            <Tweets />
         
    </div>
  )
}
