import React from 'react'
import '../styles/PageHeader.css'
import Logo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom';


const JoinIn = () => {
  return (
    <div className="Join">
        <button className='btn'><Link to='/join-in'>Join In</Link></button>
    </div>
  )
}

export default JoinIn