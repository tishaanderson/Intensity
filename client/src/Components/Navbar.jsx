import React from 'react';
// import Logo from '../assets/images/Placeholder.jpg';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='header-menu'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li><Link to='/workouts'>Workouts</Link></li>
      <li><Link to='/why-us'>Why Us</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  )
}

export default Navbar