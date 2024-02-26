import React from 'react'
import '../styles/PageHeader.css'
import Logo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom';


const PageHeader = () => {
  return (
    <div className="pageHeader">

        <img src={Logo} alt="" className='logo' />

        <ul className='page-navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li><Link to='/workouts'>Workouts</Link></li>
      <li><Link to='/why-us'>Why Us</Link></li>
      <li><Link to='/login'>Plans</Link></li>
    </ul>
    <div>
      

    </div>

    
    </div>
  )
}

export default PageHeader