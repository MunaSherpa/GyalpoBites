import React from 'react'
import './Order.css'
import Navbar from '../components/Navbar'
import {BsCircle} from 'react-icons/bs'


const Order = () => {
  return (
    <>
        <div className='order'>
            <div className='navbar'>
                <Navbar />
            </div> 
            <div className='delivery'>
                <p className='deliveryaddress'>Delivery Address</p>
                <div className='deladd'>
                <div className='deliveryname'>
                            <input type='text' placeholder='Name' className='textarea'/>
                </div>
                <div className='deladdress'>
                            <input type='text' placeholder='Address' className='textarea'/>
                </div>
                <div className='deliveryphone'>
                            <input type='text' placeholder='Phone Number' className='textarea'/>
                </div>
                </div>
            </div>
            <div className='payment'>
              <p className='paymentoption'>Payment Option</p>
              <BsCircle className='cricle'/>
              <BsCircle className='paycricle'/>
              <p className='cashondelivery'>Cash On Delivery</p>
              <img src='../assets/khalti.png' alt='img'/>
              <button className='pay'>Payment</button>
            </div>
        </div>
    </>
  )
}

export default Order