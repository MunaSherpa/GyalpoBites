import React from 'react'

const Product = ({image, name, price ,description}) => {
  return (
    <>
        <div className='menu-card'>
            <div className='menu-img'>
                <img src={image} alt='food img' className='food-pic' />
            </div>
            <div className='name-price'><p className='food-name'>{name} </p><p className='food-price'>{price}</p></div>
            <div className='desc'><p className='food-description'>{description}</p></div>
            <div className='btn'><a href='/addtocart' className='button' >Order Now</a></div>
 
        </div>
    </>
  )
}

export default Product