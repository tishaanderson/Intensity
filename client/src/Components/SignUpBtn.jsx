import React from 'react'
import {Link} from 'react-router-dom';


const SignUpBtn = () => {
  return (
    <div className="SignUpBtn">
        <button className='btn font-medium text-blue-600 dark:text-blue-500 hover:underline'><Link to='/sign-up'>Sign Up</Link></button>
    </div>
  )
}

export default SignUpBtn