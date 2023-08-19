import React from 'react'
import './FooterWindow.css'
import facebook from '../images/footer/facebook.png'
import twitter from '../images/footer/twitter.png'
import instagram from '../images/footer/instagram.png'
import github from '../images/footer/github.png'
import linkdin from '../images/footer/linkdin.gif'

export const FooterWindow = ({ setShowFooter }) => {
        
  return (
    <div className='footer-model-window' onClick={(e) => {
            if(e.target.classList.contains('footer-model-window')){
                setShowFooter(false)
            }
    }}>

            <div className="social-media-div">
                    <div className="social-row">
                            <img src={ facebook } alt="" />
                            <div><p className="profile-name"><a href='https://www.facebook.com/mohit724agarwal' target='_blank' rel="noreferrer">mohit724agarwal</a></p></div>
                    </div>
                    <div className="social-row">
                            <img src={ twitter } alt="" />
                            <div><p className="profile-name"><a href='https://www.twitter.com/mo_hit24' target='_blank' rel="noreferrer">mo_hit24</a></p></div>
                    </div>
                    <div className="social-row">
                            <img src={ instagram } alt="" />
                            <div><p className="profile-name"><a href='https://www.instagram.com/im_hit_' target='_blank' rel="noreferrer">im_hit</a></p></div>
                    </div>
                    <div className="social-row">
                            <img src={ github} alt="" />
                            <div><p className="profile-name"><a href='https://www.github.com/25mohit' target='_blank' rel="noreferrer">25mohit</a></p></div>
                    </div>
                    <div className="social-row">
                            <img src={ linkdin} alt="" />
                            <div><p className="profile-name"><a href='https://www.linkedin.com/in/agarwal24/' target='_blank' rel="noreferrer">agarwal24</a></p></div>
                    </div>
            </div>
    </div>
  )
}
