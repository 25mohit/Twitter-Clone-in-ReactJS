import React from 'react'
import './RightPannel.css'

export const MoreNews = () => {
  return (
    <div  className='main-section'>
        <div className="backgroun-color-div">
        <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">News jaipur : LIVE</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">Ukrine drives back Russian forces from Kharkiv as Negotiation continius.</p>
                    </div>
                </div>
                <div className='image-div'>
                    <img src="https://pbs.twimg.com/semantic_core_img/1525059543381577728/2gQBkbXt?format=jpg&name=900x900" alt="" />
                </div>
          </div>
      </div>

      <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">Entertainment . Trending</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">#Salaar</p>
                      <span>#KGFChapter 3, #KGF 3</span>
                    </div>
                </div>
                <div className='image-div'>
                    {/* <img src="https://pbs.twimg.com/semantic_core_img/1525059543381577728/2gQBkbXt?format=jpg&name=900x900" alt="" /> */}
                </div>
          </div>
      </div>

      <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">उत्तर भारत में भीषण गर्मी और लू को लेकर मौसम विभाग ने जारी किया अलर्ट</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">Weather . LIVE</p>
                    </div>
                </div>
                <div className='image-div'>
                    <img src="https://static.toiimg.com/thumb/msid-63957141,width-1200,height-900,resizemode-4/.jpg" alt="" />
                </div>
          </div>
      </div>
      </div>
      <div className="newdiv">
        <div className="who-to-follow">
                <div className="follow-heading">
                    <h1>Who to follow</h1>
                </div>
                <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src="https://play-lh.googleusercontent.com/VUcRMutBwvksH574ComFnkB8p4KCDeBoHvaeoqcuQmYdriE5rAgAYzk0mUqZAi3tDw2H" alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Impact Guru</p>
                                <p className="user">@ImpactGuru</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
                </div>
        </div>

        <div className="who-to-follow">
                <div className="follow-heading">
                    {/* <h1>Who to follow</h1> */}
                </div>
                <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src="https://www.filmibeat.com/img/popcorn/profile_photos/shahrukh-khan-20190625140849-86.jpg" alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Shah Rukh Khan</p>
                                <p className="user">@iamsrk</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
                </div>
        </div>

        <div className="who-to-follow">
                <div className="follow-heading">
                    {/* <h1>Who to follow</h1> */}
                </div>
                <div className="follow-suggestion-card">
                        <div className="user-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Namita_Thapar_Emcure_Pharmaceuticals.jpg/1200px-Namita_Thapar_Emcure_Pharmaceuticals.jpg" alt="" />
                        </div>
                        <div className="user-name-and-follow-bt">
                            <div className="user-name">
                                <p className="name">Namita</p>
                                <p className="user">@namitathapar</p>
                                </div>
                            <div className="folow-bt"><button className="follow">Follow</button></div>
                        </div>
                </div>
        </div>
            
        </div>
    </div>
  )
}