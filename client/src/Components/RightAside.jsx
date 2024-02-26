import React from 'react'
import '../styles/Main.css'
import '../styles/MainImg.css'
import SignUpBtn from './SignUpBtn'
import MainImg from '../assets/images/mainImage.png'


const RightAside = () => {
  return (
    <>
        <div className='right-h'>
        <SignUpBtn />
        
        <img src={MainImg} alt='' className='mainImage' />

        </div>

        
    </>

  )
}

export default RightAside