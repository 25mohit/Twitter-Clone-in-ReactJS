import React from 'react'
import { Header } from '../header/Header'
import { LeftPannel } from '../leftPannel/LeftPannel'
import { ProfilePage } from '../profilePage/ProfilePage'
import { RightPannel } from '../rightPannel/RightPannel'
import './Profile.css'

export const Profile = () => {
  return (
    <div className='main-profile-div'>
        <Header />
        <div className="main-div-1">
                <div className="leftpannel">
                        <LeftPannel/>
                </div>
                <div className='main-profile-section'>
                        <ProfilePage/>
                </div>
                <div className="right-profile-section">
                        {/* <h3>Right Profile Section</h3> */}
                        <RightPannel />
                </div>
        </div>
    </div>
  )
}
