import React from 'react'
import './Order.css'
import Navbar from '../components/Navbar'
import Khalti from '../assets/Khalti.png'


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
              <div className='pay-type'>
                  <div className='option-one'>
                    <input type='radio' className='check' name='option' value='cod' />
                    <p className='cashondelivery'>Cash On Delivery</p>
                  </div>
                  <div className='option-two'>
                    <input type='radio' className='check' name='option' value='khalti' />
                   <img className='khaltiImg' src={Khalti} alt='img'/>
                </div>
              </div>
              <button className='pay'>Payment</button>

              
            </div>
        </div>
    </>
  )
}

export default Order