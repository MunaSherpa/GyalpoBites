import React from 'react'
import Navbar from '../components/Navbar'
import {ImLocation} from 'react-icons/im'
import{HiMail} from 'react-icons/hi'
import{HiPhone} from 'react-icons/hi'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
        <div className='contact'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='content'>
                <div className='left-side'>
                    <div className='address details'>
                        < ImLocation className='icon'/>
                        <div className='topic'>Address</div>
                        <div className='addressname'>Itahari, Sunsari</div>
                    </div>
                    <div className='phone details'>
                        < HiPhone className='icon'/>
                        <div className='topic'>Phone</div>
                        <div className='number'>9827124487</div>
                    </div>
                    <div className='email details'>
                        < HiMail className='icon'/>
                        <div className='topic'>Email</div>
                        <div className='emailname'>GyalpoBites@gmail.com</div>
                    </div>
                    <form action='#' className='box'>
                        <div className='inputboxname'>
                            <input type='text' placeholder='Name' className='input'/>
                        </div>
                        <div className='inputboxemail'>
                            <input type='text' placeholder='Email' className='input'/>
                        </div>
                        <div className='feedback'>
                            <textarea id="feedback" name="feedback" placeholder="FeedBack" ></textarea>
                        </div>
                        <div className='sendbutton'>
                            <input type='submit' value='Send Message' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs