import React,{ useState } from 'react'
import './JoinPannel.css'
import twitterlogo from '../images/Twitter-logo.png'
import me from '../images/me.jpg'
import google from '../images/google-logo.png'
import apple from '../images/apple-logo.png'
import { Link } from 'react-router-dom'
import { Login } from '../login/Login'
import { Registration } from '../registration/Registration'

export const JoinPannel = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
   
  return (
    <div className='join-pannel-div'>
        <img src={ twitterlogo } alt="" />
            <div className="form">
                <h1>Happening now</h1>
                <h2>Join Twitter Today.</h2>
                    <div className="login-with-google">
                        <div>
                            <img src={me} alt="" />
                        </div>
                            <div className="inner-google-div">
                                <p className="heading">Sign is as mohit</p>
                                <p className="email">mohit724agarwal@gmail.com</p>
                            </div>
                        <div>
                            <img src={ google } alt="" />
                        </div>
                    </div>
                    <div className="login-with-apple">
                            <img src={ apple } alt="" />
                            <div className="inner-apple-div">
                                <p className="heading">Sign up with Apple</p>
                            </div>
                    </div>
                    <p className='or-p'>-------------------<span>or</span>-------------------</p>
                    <button className='signup' onClick={() => {
                        setOpenRegister(true)
                    }}>Sign up with phone or email</button>
                    {openRegister && <Registration closeModal={setOpenRegister}/>}
                    <p className='terms-p'>By signing up, you agree to the <span> Terms of Service</span> and <span> Privacy <br /> Policy</span>, including <span> Cookie Use</span>.</p>
                    <h2 className="h2-text">Already have an account?</h2>

                        {/* modal containor with open and close functionality */}
                    <button className='sign-bt' onClick={() => {
                        setOpenModal(true)
                    }}>Sign in</button>
                    {openModal && <Login closeModal = { setOpenModal }/>}
                    
            </div>
    </div>
    
  )
  
}
