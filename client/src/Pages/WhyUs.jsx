import React from 'react'
import PageHeader from '../components/PageHeader'
import WhyUs1 from '../assets/images/WhyUs1.jpg'

const WhyUs = () => {
  return (
    <section>
      <div className='flex flex-wrap lg:items-center'>
        <div className='bg-slate-300'>
          <PageHeader />
          {/* Why Us Explanation */}
          <div className='flex flex-wrap'>
            <div className='lg:w-1/2'>
              <img src={WhyUs1} alt="" />
            </div>
            <div className='lg:w-1/2'>
              <h2 className='lg:ml-12 flex-wrap'>Why Us</h2>
              <p className='lg:ml-12'>Welcome to Intensity – Where Your Fitness Journey Finds its Perfect Match!</p>
            </div>
            <div className='lg:w-1/2'>
              <p className='lg:ml-12'>At Intensity, we understand that achieving your fitness goals requires more than just a generic workout routine; it demands personalized guidance and a connection with the right coach. That's why we've created a unique platform that goes beyond traditional fitness apps. Here's why Intensity stands out:</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhyUs