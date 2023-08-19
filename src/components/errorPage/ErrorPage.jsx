import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import twitter from '../images/Twitter-logo.png'
import './ErrorPage.css'

export const ErrorPage = () => {
    const nevigate = useNavigate()
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const changeEmail = () =>{
        const emailID = document.getElementById('emailField');
        emailID.placeholder='Email'

        const emailTtext = document.getElementById('emailTtext');
        emailTtext.innerHTML='Use phone insted'
    }
    const confirm = () => {
        dispatch({
            type : 'REGISTER',
            payload:{
                name, phone, password
            }
        })
        const message = document.getElementById('registrtion-message');
        message.innerHTML="Registered Successfully.."
    }

    return (
    <div className='model-background'>
        <div className="modal-container">
        <div className='header'>
                <img src={ twitter } alt="" />
                <div>
                <button onClick={() => { }} className='cancel-bt'>X</button>
                </div>
            </div>
            <h1 className='registration-header'>Sign up to Twitter</h1>
            <input type="text"  className='login-input' placeholder='Name' value={ name } onChange={e => setName(e.target.value)}/><br />
            <input type="text"  className='login-input'placeholder='Phone' id='emailField' value={ phone } onChange={e => setPhone(e.target.value)}/><br />
            <input type="text"  className='login-input' placeholder='Password' value={ password } onChange={ e => setPassword(e.target.value)}/>
                <div className="use-email-p">
                    <p onClick={ changeEmail } id='emailTtext'>Use email insted</p>
                </div>
                <div className="dob-form">
                    <p className="date">Date of birth</p>
                    <p className="detail">This will not be shown publicly. Confirm your own age, even <br />if this  account is for a business, a pet, or something else.</p>
                        <div className="dob-option">
                            <select name="" id="">
                                <option value="">Month</option>
                                <option value=""></option>
                            </select>
                            <select name="" id="">
                                <option value="">Day</option>
                                <option value="">1</option>
                            </select>
                            <select name="" id="">
                                <option value="">Year</option>
                                <option value="">1</option>
                            </select>
                        </div>
                </div>
                <button className='confirm-registration' onClick={ confirm }>Confirm</button>
                <p id="registrtion-message" className='success-message'>&nbsp;</p>
        </div>
        
    </div>
  )
}
