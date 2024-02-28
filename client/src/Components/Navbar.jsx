// import { useState } from 'react';
import React from 'react';
// import Logo from '../assets/images/Placeholder.jpg';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
console.log(Auth);

// const [username, setName] = useState('');

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to='/' class="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Home</Link>
      </div>
      <div><Link to='/workouts' class="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Workouts</Link></div>
      <div><Link to='/why-us' class="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Why Us</Link></div>
      <div>
        {Auth.loggedIn() ? (
          <div>
            {/* <li>Welcome User!</li> */}
            <button onClick={Auth.logout} class='button-override nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1'>Logout</button>
          </div>
        ) : (
          <div>
            {/* <li>Welcome Guest!</li> */}
            <Link to='/logIn' class="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Log In</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar