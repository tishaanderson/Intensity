import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const username = Auth.getUsername();
  return (
    <div className='navbar'>
      <div>
        <Link to='/' className="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Home</Link>
      </div>
      <div>
        <Link to='/workouts' className="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Workouts</Link>
      </div>
      <div>
        <Link to='/why-us' className="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Why Us</Link>
      </div>
      <div>
        <Link to='/profile' className="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Profile</Link>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <div>
            <button onClick={Auth.logout} className='button-override nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1'>Welcome, {username}</button>
          </div>
        ) : (
          <div>
            <Link to='/logIn' className="nav-link bg-orange-500 focus:bg-blue-700 text-white rounded-full p-1">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;