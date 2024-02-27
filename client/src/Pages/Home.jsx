import React from 'react'
import '../styles/Main.css'
import '../index.css'

const Home = () => {
  return (
    <>
      <div className="left-h">
        <div className="the-best-ad">
          <span id='best-text'>The Best</span> <span id='no-background'>Intense Fitness Club Nationwide</span>
        </div>

        <div className="home-text">
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
      </div>
    </>

  )
}

export default Home