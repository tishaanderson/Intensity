import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header/>
{/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best Intense Fitness Club Nationwide</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
            We aim to help you achieve tour ideal body
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+250</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+969</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+85</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">right Side</div>
    </div>
  )
}

export default Hero