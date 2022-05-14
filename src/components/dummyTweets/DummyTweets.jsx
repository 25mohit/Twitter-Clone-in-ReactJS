import React, { useState } from 'react'
import './DummyTweets.css'
import me from '../images/me1.jpg'
import heart from '../images/tweet-post/heart-icon.png'
import message from '../images/tweet-post/message.png'
import statis from '../images/tweet-post/statis-icon.png'
import triangle from '../images/tweet-post/triangle-icon.png'
import arrow from '../images/tweet-post/two-arrow.png'
import upload from '../images/tweet-post/upload-icon.png'

export const DummyTweets = ({ setUser1  }) => {
    const closeModel1 = () => { setUser1(false) }
  return (
      <div className="main-dummy-tweets"> 

            <div className='tweet-card-div-dummy'>
                    <div className='profile-img'>
                        <img src='https://pbs.twimg.com/profile_images/1425801533287899140/ayVDvytt.jpg' alt="" />
                    </div>
                    <div className='right-side-div'>
                                <div className="second-colum-1-1">
                                        <div className='name-user'>
                                                <p className="name">Kiara Advani</p>
                                                <p className="user-name">@advani_kiara</p>
                                        </div>
                                        <div className='close-bt-dummy'>
                                                <button className='bt-close-dummy' onClick={ closeModel1 }>X</button>
                                        </div>
                                </div>
                                <div className="second-colum-2">
                                    <div className='emoji'>🔥😁😁😁</div>
                                    <img src="https://pbs.twimg.com/media/FSYMw2WVkAAl8iS?format=jpg&name=large" alt="" />
                                </div>
                                <div className="second-colum-3">
                                            <img src={ message } alt="" />
                                            <img src={ arrow } alt="" />
                                            <img src={ heart } alt="" />
                                            <img src={ upload } alt="" />
                                            <img src={ statis } alt="" />
                                            <span><img src={ triangle } alt="" /><p>Tip</p></span>
                                </div>
                    </div>
            </div>
            </div>
            )}
export const DummyTweets2 = ({  setUser2}) => {
    const closeModel2 = () => { setUser2(false) }
                return(
                    <div className='tweet-card-div-dummy'>
                    <div className='profile-img'>
                        <img src='https://pbs.twimg.com/profile_images/1425801533287899140/ayVDvytt.jpg' alt="" />
                    </div>
                    <div className='right-side-div'>
                                <div className="second-colum-1-1">
                                        <div className='name-user'>
                                                <p className="name">Kiara Advani</p>
                                                <p className="user-name">@advani_kiara</p>
                                        </div>
                                        <div className='close-bt-dummy'>
                                                <button className='bt-close-dummy' onClick={ closeModel2 }>X</button>
                                        </div>
                                </div>
                                <div className="second-colum-2">
                                    <div className='emoji'>Here’s one of my favourite pictures of my parents❤️ I've always looked up to them for the perfect marriage! Their blessings are always with me.. now I need YOURS! Also, some advice please, kyunki sab kehte hai - shaadi ke baad sab badal jaata hai. Kya sachi badal jaata hai?</div>
                                    <img src="https://pbs.twimg.com/media/FSYAjF8akAErTsh?format=jpg&name=large" alt="" />
                                </div>
                                <div className="second-colum-3">
                                            <img src={ message } alt="" />
                                            <img src={ arrow } alt="" />
                                            <img src={ heart } alt="" />
                                            <img src={ upload } alt="" />
                                            <img src={ statis } alt="" />
                                            <span><img src={ triangle } alt="" /><p>Tip</p></span>
                                </div>
                    </div>
            </div>
                )
            }
export const DummyTweets3 = ({  setUser3}) => {
    const closeModel3 = () => { setUser3(false) }
                return(
                    <div className='tweet-card-div-dummy'>
                    <div className='profile-img'>
                        <img src='https://pbs.twimg.com/profile_images/1425801533287899140/ayVDvytt.jpg' alt="" />
                    </div>
                    <div className='right-side-div'>
                                <div className="second-colum-1-1">
                                        <div className='name-user'>
                                                <p className="name">Kiara Advani</p>
                                                <p className="user-name">@advani_kiara</p>
                                        </div>
                                        <div className='close-bt-dummy'>
                                                <button className='bt-close-dummy' onClick={ closeModel3 }>X</button>
                                        </div>
                                </div>
                                <div className="second-colum-2">
                                    <div className='emoji'>No better combo than Arijit and Pritam❤️
Can't wait to make y'all hear your next favorite romantic track 😍<br />
<span>#HumNasheMeinTohNahi ❤️<br />
#BhoolBhulaiyaa2 <br />
#20thMay <br />
@advani_kiara
 #Tabu 
@rajpalofficial
 #BhushanKumar <br />
@anjummurad
 #KrishanKumar 
@BazmeeAnees</span></div>
                                    <img src="https://pbs.twimg.com/media/FSPbszjagAE-Psz?format=jpg&name=large" alt="" />
                                </div>
                                <div className="second-colum-3">
                                            <img src={ message } alt="" />
                                            <img src={ arrow } alt="" />
                                            <img src={ heart } alt="" />
                                            <img src={ upload } alt="" />
                                            <img src={ statis } alt="" />
                                            <span><img src={ triangle } alt="" /><p>Tip</p></span>
                                </div>
                    </div>
            </div>
                )}
export const DummyTweets4 = ({  setUser4}) => {
    const closeModel4 = () => { setUser4(false) }
                return(
                    <div className='tweet-card-div-dummy'>
                    <div className='profile-img'>
                        <img src='data:image/jpeg;base64,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' alt="" />
                    </div>
                    <div className='right-side-div'>
                                <div className="second-colum-1-1">
                                        <div className='name-user'>
                                                <p className="name">Dwayne Johnson</p>
                                                <p className="user-name">@TheRock</p>
                                        </div>
                                        <div className='close-bt-dummy'>
                                                <button className='bt-close-dummy' onClick={ closeModel4 }>X</button>
                                        </div>
                                </div>
                                <div className="second-colum-2">
                                    <div className='emoji'>ntense week of production on BLACK ADAM⚡️
Throughout my career, I’ve had the privilege of playing some great (fun) characters, but none speak to my DNA more than this antihero known as the man in black, Teth Adam. 
Rage against the dying of the light. <br />
<span>#BlackAdam⚡</span>
</div>
                                    <img src="https://pbs.twimg.com/media/FSWrSk_XEAE22Cx?format=jpg&name=large" alt="" />
                                </div>
                                <div className="second-colum-3">
                                            <img src={ message } alt="" />
                                            <img src={ arrow } alt="" />
                                            <img src={ heart } alt="" />
                                            <img src={ upload } alt="" />
                                            <img src={ statis } alt="" />
                                            <span><img src={ triangle } alt="" /><p>Tip</p></span>
                                </div>
                    </div>
            </div>

                )}
           