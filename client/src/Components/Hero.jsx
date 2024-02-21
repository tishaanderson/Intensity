import React from 'react'
import '../styles/Hero.css'
import Header from './Header'
import hero_image from '../assets/images/hero_image.png'
import hero_image_back from '../assets/images/hero_image_back.png'
import Heart from '../assets/icons/heart.png'
import Calories from '../assets/icons/calories.png'


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
      <div className="right-h">
        <button>Join Now</button>
      </div>
    </div>
  )
}

export default Hero