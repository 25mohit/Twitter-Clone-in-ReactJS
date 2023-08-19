import React from 'react'
import './LogoutCard.css'
import me from '../images/me1.jpg'
import { useDispatch, useSelector } from 'react-redux'

export const LogoutCard = ({ setShowLogout }) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.loggedInUser)

    const userLogout = () => {
        dispatch({
            type:'LOGOUT'
        })
    }
    return(
        <div className="logout-card" onClick={(e) =>{
            if(e.target.classList.contains('logout-card')){
                setShowLogout(false)
        }
        }}>

                <div className="container">
                        <div className="header">
                            <div className='image'>
                                <img src={ me } alt="" />
                            </div>
                            <div className='user-infos'>
                                <p className="fullname">{ users && users.name}</p>
                                <p className="username">@24_{ users && users.name}</p>
                            </div>
                        </div>
                        <div className="existing-account">
                            <p className="info">Add an existing account</p>
                        </div>
                        <div className="logout">
                        <p className="info" onClick={ userLogout }>Log out @24_{ users && users.name}</p>
                        </div>
                </div>
        </div>
    )
}