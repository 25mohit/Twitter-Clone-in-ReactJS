import React from 'react'
import './HomePage.css'
import background from '../images/background.png'
import { JoinPannel } from '../joinPannel/JoinPannel'

export const HomePage = () => {
  return (
    <div className="home-page">
        <div className='left-panel'>
            <img src={background} alt="" />
        </div>
        <div className='right-panel'>

            <JoinPannel />
            
        </div>
    </div>
  )
}
