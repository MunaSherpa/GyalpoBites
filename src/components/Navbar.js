import React from 'react'
import '../pages/Home'
import "./Navbar.css"
import {FaShoppingCart} from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
        <div className='nav'>
    
          <div className='logo-text'>
              Gyalpo Bites
          </div>
        
           
            <div className='navbar-link'>
              <ul className='links-nav'>
                <li><a className='home' href="/home">Home</a></li>
                <li><a className='menu' href="/menu">Menu</a></li>
                <li><a className='order' href="/order">Order</a></li>
                <li><a className='contactus' href="/contactus">ContactUs</a></li>
                <li><a className='cart' href="/addtocart"> <FaShoppingCart/> </a></li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar