import React from 'react'
import '../styles/Header.css'
import Logo from '../../assets/images/Logo.png'

const Header = () => {
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo' />

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plan</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header