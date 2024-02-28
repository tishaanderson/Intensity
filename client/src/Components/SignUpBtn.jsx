import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const SignUpBtn = () => {
  return (
    <div className="signUpBtn">
      {Auth.loggedIn() ? (
        // If logged in, show logout button
        <button className='btn font-medium text-blue-600 dark:text-blue-500 hover:underline rounded-full' onClick={Auth.logout}>Log Out</button>
      ) : (
        // If not logged in, show sign up button
        <button className='btn font-medium text-blue-600 dark:text-blue-500 hover:underline rounded-full'><Link to='/sign-up'>Sign Up</Link></button>
      )}
    </div>
  );
};

export default SignUpBtn;