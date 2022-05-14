import React, { useState } from 'react'
import { MoreNews } from './MoreNews'
import './RightPannel.css'

export const RightPannel = () => {
    const [showMore, setShowMore] = useState(false)
    const showNews = () => {
            setShowMore( true )
    }
  return (
    <div className='main-section'>
       <h1>What's happening</h1>
       <div className="backgroun-color-div">

      <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">India nation news . LIVE</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">Allabhad High Court Rejects plea to open 22 locked rooms in <br /> Taj Mahal</p>
                    </div>
                </div>
                <div className='image-div'>
                    <img src="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg" alt="" />
                </div>
          </div>
      </div>

      <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">#ModernLoveOnPrime</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">Binge watch the series on Amazon Prime Video Promoted by amazon video IN</p>
                    </div>
                </div>
                <div className='image-div'>
                    {/* <img src="https://images.news18.com/ibnlive/uploads/2022/05/jayeshbhai-jordaar-review-ranveer-singh-16524312893x2.jpg" alt="" /> */}
                </div>
          </div>
      </div>


      <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">Word news . LIVE</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">Ranil Wickremesinghe sworn in as new prime minister of Sri Lanks</p>
                    </div>
                </div>
                <div className='image-div'>
                    <img src="https://m.economictimes.com/thumb/msid-66400790,width-1200,height-900,resizemode-4,imgsize-114853/sri-lanka-speaker-recognises-ranil-wickremesinghe-as-prime-minister.jpg" alt="" />
                </div>
          </div>
      </div>

      <div className='right-pannel-section'>
          <div className="model-card">
                <div className='info-div'>
                    <div className="heading">
                        <p className="head">Entertainment</p>
                    </div>
                    <div className="subject">
                      <p className="heading-p">Reviews are in for Ranveer SIngh's Jayeshbhai Jordaar</p>
                    </div>
                </div>
                <div className='image-div'>
                    <img src="https://images.news18.com/ibnlive/uploads/2022/05/jayeshbhai-jordaar-review-ranveer-singh-16524312893x2.jpg" alt="" />
                </div>
          </div>
      </div>
      </div>
    {
        showMore ? <MoreNews /> : <p className="show-more" onClick={ showNews }>show more</p>
    }
    
      
    </div>
  )
}
