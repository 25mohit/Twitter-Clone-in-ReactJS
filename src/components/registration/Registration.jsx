import React,{ useState } from 'react'
import './Registration.css'

import twitter from '../images/Twitter-logo.png'
import { useDispatch } from 'react-redux'

export const Registration = ({closeModal}) => {
    const dates = [];
    for(let i=0; i<31;i++){
        dates.push(i+1)
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('password')

    const dispatch = useDispatch()

    const changeEmail = () =>{
       
        if(document.getElementById('emailField').placeholder='Phone'){
            document.getElementById('emailField').placeholder='Email'
            document.getElementById('emailTtext').innerHTML='Use phone insted';
        } else{
            document.getElementById('emailField').placeholder='Phone'
            document.getElementById('emailTtext').innerHTML='Email';
        }
        // const emailID = document.getElementById('emailField');
        // emailID.placeholder='Email'

        // const emailTtext = document.getElementById('emailTtext');
        // emailTtext.innerHTML='Use phone insted'
        
        
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
    const show = () => {
        if(showPassword==='password'){
        setShowPassword('text')
        }else{
            setShowPassword('password')
        }
    }
  return (
    <div className='modelbackground'>
    <div className='modelcontainer'>
    <div className='header'>
                <img src={ twitter } alt="" />
                <div>
                <button onClick={() => {
                    closeModal(false)
                }} className='cancel-bt'>X</button>
                </div>
            </div>
            <h1 className='registration-header'>Create your account</h1>
            <input type="text"  className='login-input' placeholder='Name' value={ name } onChange={e => setName(e.target.value)}/><br />
            <input type="text"  className='login-input'placeholder='Phone' id='emailField' value={ phone } onChange={e => setPhone(e.target.value)}/><br />
            <input type={showPassword}  className='login-input' placeholder='Password' value={ password } onChange={ e => setPassword(e.target.value)}/><br/>
            <span className='span-div'>
                    <span className='show-password-span'>
                            <label htmlFor="showPassword" onClick={ show }>Show password</label>
                    </span>
                        <div className="use-email-p">
                            <p onClick={ changeEmail } id='emailTtext'>Use email insted</p>
                        </div>
            </span>
                <div className="dob-form">
                    <p className="date">Date of birth</p>
                    <p className="detail">This will not be shown publicly. Confirm your own age, even <br />if this  account is for a business, a pet, or something else.</p>
                        <div className="dob-option">
                            <select name="" id="">
                                <option value="" disabled>Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <select name="" id="">
                              {
                               dates.map(date => <option value={ date }>{date}</option>)
                              }
                            </select>
                            <select name="" id="">
                                <option value="" disabled>Year</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                            </select>
                        </div>
                </div>
                <button className='confirm-registration' onClick={ confirm }>Confirm</button>
                <p id="registrtion-message" className='success-message'>&nbsp;</p>
    </div>
    </div>
  )
}
