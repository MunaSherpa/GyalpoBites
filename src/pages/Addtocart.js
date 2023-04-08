import React from 'react'
import './Addtocart.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Cart = () => {

    
        let [num, setNum]= useState(1);
        let incNum =()=>{
          if(num<10)
          {
          setNum(Number(num)+1);
          }
        };
        let decNum = () => {
           if(num>1)
           {
            setNum(num - 1);
           }
        }
       let handleChange = (e)=>{
         setNum(e.target.value);
        }


  return (
    <>
        <div className='Addcart'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div id="cartpage" className='Addtocart'>
                    <p id="carttitle">Cart Items</p>
                    <table>
                        <thead>
                            <td>Item</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </thead>
                        <tbody id="table-body">
                            <tr>
                                <td>Ting Momo</td>
                                <td>
                                    <div className='quantity-button'>
                                    <button className='decrease-item' onClick={decNum}>-</button>
                                    <input type="text" class="form-control" value={num} onChange={handleChange}/>
                                    <button className='increase-item' onClick={incNum}>+</button>
                                    </div>
                                </td>
                                <td>10</td>
                            </tr>
                            
                        </tbody>
                    </table>
            </div>
                    <div id="cart">
                        <div id="checkout" class="Addtocart">
                            <p id="total-item">Total Item: {num}</p>
                            <p id="total-amount">Total Amount: Rs200</p>
                            {/* <p id="delievery">Free delievery</p> */}
                            <button className="cart-btn"><a href='/order' className='check' >Checkout</a></button>
                            <button className='continueshopping'><a href='/menu' className='shopping' >Continue Shopping</a></button>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default Cart;