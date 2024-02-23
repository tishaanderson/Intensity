import React from 'react'
import '../styles/PageNavbar.css'
import Logo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom';


const PageNavbar = () => {
  return (
    <div className="pageNavbar">

        <img src={Logo} alt="" className='logo' />

        <ul className='page-navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li><Link to='/workouts'>Workouts</Link></li>
      <li><Link to='/why-us'>Why Us</Link></li>
      <li><Link to='/plans'>Plans</Link></li>
    </ul>
    </div>
  )
}

export default PageNavbar