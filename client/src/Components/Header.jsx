import React from 'react'
import '../styles/Header.css'
import Logo from '../assets/images/Logo.png'
import Navbar from './Navbar'
import SignUpBtn from './SignUpBtn'


const Header = () => {
  return (
    <div className="header">

      <img src={Logo} alt="" className='logo' />

      <Navbar />
      <SignUpBtn />

    </div>
  )
}

export default Header