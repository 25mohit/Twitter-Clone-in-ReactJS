import React from 'react'
import './RightPannel.css'
import aamir from '../images/celebs-material/aamir.jpg'
import hritik from '../images/celebs-material/hritik.jpeg'
import jahanvi from '../images/celebs-material/jahanvi.png'
import john from '../images/celebs-material/john.webp'
import kartik from '../images/celebs-material/kartik.jpg'
import msdhoni from '../images/celebs-material/msdhoni.webp'
import salman from '../images/celebs-material/salman.jpg'
import shanaya from '../images/celebs-material/shanaya.jpg'
import sushant from '../images/celebs-material/sushant.webp'
import virat from '../images/celebs-material/virat.jpg'

export const ExtraFollow = () => {
  return (
    <div className="who-to-follow">
        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ aamir } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Aamir Khan</p>
                                <p className="user">@khan_aamir</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ hritik } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Hritik Roshan</p>
                                <p className="user">@hritikroshan</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ jahanvi } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Jahanvi Kapoor</p>
                                <p className="user">@jahanvi_kapoor</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ john } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">John Abhram</p>
                                <p className="user">@abhram_john</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ kartik } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Kartik Aaryan</p>
                                <p className="user">@kartik_aaryan</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ msdhoni } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">MS Dhoni</p>
                                <p className="user">@msdhoni</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ salman } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Salman Khan</p>
                                <p className="user">@khan_salman</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ shanaya } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Shanaya Kapoor</p>
                                <p className="user">@kapoor_shanaya</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>

        <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src={ sushant } alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Sushant Singh Rajpoot</p>
                                <p className="user">@sushant_rajpoot</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
        </div>
    </div>
  )
}
