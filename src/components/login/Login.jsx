import React,{ useState } from 'react'
import './Login.css'
import twitter from '../images/Twitter-logo.png'
import apple from '../images/apple-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Login = ({ closeModal }) => {

    const [userEmail, setUserEmail] = useState('')

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const nevitage = useNavigate()

    const loginUser = () => {
       const payload =  users.find(user => user.phone === userEmail )
        if(payload){
            dispatch({
                type : 'LOGIN',
                payload
            })
            alert('Success !!')
            nevitage('/')
        }
        else{
            const error = document.getElementById('wrongUserError');
            error.innerHTML=' Please enter right Password..!'
        }
    }

  return (
    <div className='modelbackground-login'>
        <div className="modelcontainer-login">
            <div className='header'>
                <img src={ twitter } alt="" />
                <div>
                    <button onClick={() => {
                    closeModal(false)
                }} className='cancel-bt'>X</button>

                </div>
            </div>
            <h1>Sign in to Twitter</h1>
                <div className='signin-apple'>
                    <img src={apple} alt="" />
                        <div>
                            <p>Sign in with Apple</p>
                        </div>
                </div>
                <p className='or-p'>------------------------- <span>or</span>-------------------------</p>
                <input type="text" placeholder='Phone, email, or username' className='login-input-1' value={ userEmail } onChange={e => setUserEmail(e.target.value)}/><br />

            <input type="button" value="Login" className='next-bt' onClick={ loginUser } /><br />
            <input type="button" value="Forget password?" className='forget-bt'/>
            <p id='wrongUserError' className='wrong-user-error'>&nbsp;</p>
        </div>
    </div>
  )
}
