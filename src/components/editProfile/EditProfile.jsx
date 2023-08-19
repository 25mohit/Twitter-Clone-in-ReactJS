import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './EditProfile.css'

export const EditProfile = ({ closeModel }) => {
    const [bioText, setBioText] = useState('')
    const [location, setLocation] = useState('')
    const dispatch = useDispatch()

    const saveProfile = () => {
        dispatch({
            type : 'UPDATE_BIO',
            payload :{
                bioText, location
            }
        })
    }

  return (
    <div className='model-background-1'>
            <div className="model-1">
                    <div className="header-div-1">
                            <div className="close-bt">
                                        <button onClick={() => { closeModel(false) }}>X</button>
                                        <h2>Edit profile</h2>
                            </div>
                            <div className="save-bt">
                                        <button onClick={ saveProfile }>Save</button>
                            </div>
                    </div>
                    <div className="form">
                        {/* <input type="text" placeholder='Name' className='text-input' /><br /> */}
                        <input type="text" className='text-input' placeholder='Bio' value={ bioText } onChange={ e => {setBioText(e.target.value)}}/><br />
                        <input type="text" className='text-input' placeholder='Location' value={ location } onChange={ e => {setLocation(e.target.value)}}/><br />
                        <input type="text" className='text-input' placeholder='Website' /><br />
                    </div>

            </div>
    </div>
  )
}
