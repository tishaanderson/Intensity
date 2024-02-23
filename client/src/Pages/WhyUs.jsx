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
          <div className='lg:w-1/2'>
            <img src={WhyUs1} alt="" />
          </div>
          <div className='lg:w-1/2'>
            <h2 className='lg:ml-12 flex-wrap'>Why Us</h2>
            <p className='lg:ml-12'>We are a fitness club catered to supporting both our coaches and athletes to rise to the occasion of their fullest potential.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhyUs