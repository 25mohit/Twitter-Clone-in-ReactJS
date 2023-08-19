import React, { useState } from 'react'
import './ProfilePage.css'
import cover from '../images/cover.jpg'
import me1 from '../images/me1.jpg'
import ballon from '../images/ballon-icon.png'
import location from '../images/location-icon.png'
import callender from '../images/callender-icon.png'
import { EditProfile } from '../editProfile/EditProfile'
import { useSelector } from 'react-redux'

export const ProfilePage = () => {
    const [model, setModel] = useState(false)
    const bio = useSelector(state => state.bio)
  return (
    <div className='profile-main'>
            <div className="user-detail-section">
                <div className="cover-photo">
                            <img src={cover} alt="" />
                </div>
                <div className="profile-infos">
                    <div className="header">
                            <div className='profile-photo'>
                                <img src={ me1 } />
                                </div>
                            <div className='edit-profile-bt'>
                                <button onClick={ () =>{
                                    setModel(true)
                                }}>Edit Profile</button>
                            </div>
                    </div>{ model && <EditProfile closeModel={ setModel }/> }
                            
                    <div className="usernames">
                                <h2 className='name'>mohit agarwal</h2>
                                <h2 className="username-p">@mo_hit24</h2>
                            </div>
                            <div className="status-p">
                                {
                                    bio ?
                                    <p>{bio.bioText}</p>
                                    : <p>...Bio...</p>
                                }                                
                            </div>
                            <div className="registration-info">
                                    <div><img src={ ballon } alt="" /> { bio ? <p className="location-p">{ bio.location }</p> : <p className="location-p">Jaipur, Rajasthan</p>}
                                        </div>
                                    <div><img src={ location } alt="" /><p className="dob">Born, July 24, 1995</p></div>
                                    <div><img src={ callender } alt="" /><p className="registered-date">Joined February 2012</p></div>
                            </div>
                </div>
            </div>
    </div>
  )
}
