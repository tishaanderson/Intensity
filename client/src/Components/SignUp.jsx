import React from 'react'
import '../styles/PageHeader.css'
import Logo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom';


const SignUpBtn = () => {
  return (
    <div className="SignUpBtn">
        <button className='btn font-medium text-blue-600 dark:text-blue-500 hover:underline'><Link to='/sign-up'>Sign Up</Link></button>
    </div>
  )
}

export default SignUpBtn