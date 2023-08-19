import React from 'react'
import './DummyTweets.css'
import heart from '../images/tweet-post/heart-icon.png'
import message from '../images/tweet-post/message.png'
import statis from '../images/tweet-post/statis-icon.png'
import triangle from '../images/tweet-post/triangle-icon.png'
import arrow from '../images/tweet-post/two-arrow.png'
import upload from '../images/tweet-post/upload-icon.png'
import kiaraProfile from '../images/celebs-material/kiaraProfile.jpg'
import kiaraOne from '../images/celebs-material/kiaraOne.jpg'
import kiaraTwo from '../images/celebs-material/kiaraTwo.jpg'
import kiaraThree from '../images/celebs-material/kiaraThree.jpg'
import therockProfile from '../images/celebs-material/therockProfile.jpeg'
import theRock from '../images/celebs-material/therock.jpg'
import carry from '../images/celebs-material/carry.jpg'

export const DummyTweets = ({ setUser1  }) => {
    const closeModel1 = () => { setUser1(false) }
  return (
      <div className="main-dummy-tweets"> 

            <div className='tweet-card-div-dummy'>
                    <div className='profile-img'>
                        <img src={ kiaraProfile } alt="" />
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
                                    <img src={ kiaraOne } alt="" />
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
                        <img src={ kiaraProfile } alt="" />
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
                                    <img src={ kiaraTwo } alt="" />
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
                        <img src={ kiaraProfile } alt="" />
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
                                    <img src={ kiaraThree } alt="" />
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
                        <img src={ therockProfile } alt="" />
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
                                    <div className='emoji'>Intense week of production on BLACK ADAM⚡️
Throughout my career, I’ve had the privilege of playing some great (fun) characters, but none speak to my DNA more than this antihero known as the man in black, Teth Adam. 
Rage against the dying of the light. <br />
<span>#BlackAdam⚡</span>
</div>
                                    <img src={theRock } alt="" />
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
           
export const DummyTweets5 = ({  setUser5}) => {
        const closeModel5 = () => { setUser5(false) }
                        return(
                        <div className='tweet-card-div-dummy'>
                        <div className='profile-img'>
                                <img src={ carry } alt="" />
                        </div>
                        <div className='right-side-div'>
                                        <div className="second-colum-1-1">
                                                <div className='name-user'>
                                                        <p className="name">Carry Minati</p>
                                                        <p className="user-name">@minati_carry</p>
                                                </div>
                                                <div className='close-bt-dummy'>
                                                        <button className='bt-close-dummy' onClick={ closeModel5 }>X</button>
                                                </div>
                                        </div>
                                        <div className="second-colum-2">
                                        <div className='emoji'>Intense week of production on BLACK ADAM⚡️
        Throughout my career, I’ve had the privilege of playing some great (fun) characters, but none speak to my DNA more than this antihero known as the man in black, Teth Adam. 
        Rage against the dying of the light. <br />
        <span>#BlackAdam⚡</span>
        </div>
                                        {/* <img src={theRock } alt="" /> */}
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