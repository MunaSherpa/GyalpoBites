import React from 'react'
import './Firstpg.css'
import {FaUserAlt} from 'react-icons/fa'

const Firstpg = () => {
  return (
    <>
    <div className='background'>

        <div className='nav-link'>

            <div className='logo-text'>
                Gyalpo Bites
            </div>
            
               
            <div className='links-div'>
                <ul className='links'>
                    <li><a className='log' href="/login"><FaUserAlt className='icons' />Login</a></li>
                    <li><a className='sign' href="/signup"><FaUserAlt className='icons' />Signup</a></li>
                </ul>
            </div>'
        </div>
        <div className='body-text'>
            <h1>We Deliver The Taste OF Life</h1>
            <p>Get It Delivered Right To Your Door!</p>
        </div>
    </div>
        
    
    </>
  )
}

export default Firstpg