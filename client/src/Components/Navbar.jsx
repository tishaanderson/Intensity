import React from 'react';
// import Logo from '../assets/images/Placeholder.jpg';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
console.log(Auth);

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li><Link to='/workouts'>Workouts</Link></li>
      <li><Link to='/why-us'>Why Us</Link></li>
      <div>
        {Auth.loggedIn() ? (
          <div>
            {/* <li>Welcome User!</li> */}
            <button onClick={Auth.logout}>Logout</button>
          </div>
        ) : (
          <div>
            {/* <li>Welcome Guest!</li> */}
            <Link to='/logIn'>Log In</Link>
          </div>
        )}
      </div>
    </ul>
  )
}

export default Navbar