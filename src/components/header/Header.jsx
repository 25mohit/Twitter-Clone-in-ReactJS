import React from 'react'
import { Link } from 'react-router-dom'
import twitter from '../images/Twitter-logo.png'
import './Header.css'

export const Header = () => {
  return (
    <div className='header-div'>
        <div className='logo'>
            <Link to='/'><img src={ twitter } alt="" /></Link>
        </div>
        <div className='home-heading'>
            <h2>Home</h2>
        </div>
        <div className='search-bar'>
            <input type="text"  placeholder='Search Twitter' className='search-text-header'/>
        </div>
        
    </div>
  )
}
