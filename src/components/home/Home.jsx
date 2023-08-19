import React, { useState } from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import { Header } from '../header/Header'
import { RightPannel } from '../rightPannel/RightPannel'
import { LeftPannel } from '../leftPannel/LeftPannel'
import { NewsFeed } from '../newsFeed/NewsFeed'
import { ErrorPage } from '../errorPage/ErrorPage'
import { TweetField } from '../tweetField/TweetField'
import { Tweets } from '../tweets/Tweets'
import { DummyTweets, DummyTweets5 } from '../dummyTweets/DummyTweets'
import { DummyTweets2 } from '../dummyTweets/DummyTweets'
import { DummyTweets3 } from '../dummyTweets/DummyTweets'
import { DummyTweets4 } from '../dummyTweets/DummyTweets'
import { Footer } from '../footer/Footer'

export const Home = () => {

  const [user1, setUser1] = useState(true)
  const [user2, setUser2] = useState(true)
  const [user3, setUser3] = useState(true)
  const [user4, setUser4] = useState(true)
  const [user5, setUser5] = useState(true)

  const user = useSelector(state => state.loggedInUser)
  
  const tweets = useSelector(state => state.tweets)
return (
    <div className='home-div-main-app'>
      {user ?
      <div>
            <Header />
        <div className='main-div'>
              <div className="rightpannel">
                  <LeftPannel />
              </div>
                <div className="newsfeed">
                  <NewsFeed />
                  {
                          user?
                          <div className='tweet-maps'>
                             {
                                 tweets.map(tweet => <Tweets key={tweet.id} tweet={tweet} TweetField={TweetField}/>)
                             }
                          </div> : null
                        }
                        { user1 &&  <DummyTweets setUser1 = { setUser1 }/> }
                        { user2 &&  <DummyTweets2 setUser2 = { setUser2 }/> }
                        { user3 &&  <DummyTweets3 setUser3 = { setUser3 }/> }
                        { user4 &&  <DummyTweets4 setUser4 = { setUser4 }/> }                   
                        { user5 &&  <DummyTweets5 setUser5 = { setUser5 }/> }                   
                   
                </div>
              <div className="leftpannel">
                  <RightPannel />
              </div>
        </div>
      </div>
      : <ErrorPage />
      }
      <div className="footer">
      <Footer />

      </div>
    </div>
  )
}
