import React from 'react'
import '../styles/Header.css'
import Logo from '../assets/images/Logo.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo' />

       <Navbar />
    </div>
  )
}

export default Header