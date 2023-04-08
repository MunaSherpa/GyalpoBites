import React from 'react'
import Navbar from '../components/Navbar'
import "./Menu.css"
import Product from '../components/Product'
import Thakali from '../assets/logo1.jpg'
import SamyaBaji from '../assets/Samya Baji.jpg'
import Laphing from '../assets/Laphing.png'
import Yomari from '../assets/Yomari.png'
import Yangben from '../assets/Yangben.png'
import TingMomo from '../assets/Ting Momo.png'
import Bhakka from '../assets/Bhakka.jpg'
import Biryani from '../assets/Biryani.jpg'



const Menu = () => {
  return (
    <>
      <div className="menu" id="Menu">
        <div>
          <Navbar />
        </div>
        <div className="menu-up">
          <Product
            image={Thakali}
            name='Thakali Khana'
            description='Ingredients: With Ghee, Locally Grown Buckwheat, Barley, Millet and Dal, As Well As Rice, Maize.'
            price='Rs 450'
            button='Order Now'
          />

          <Product
            image={SamyaBaji}
            name='Samya Baji'
            description='Ingredients: Baji, Samay(Puffed Rice), Fried Soybeans, Fresh Ginger, Marinated Meat and Dried Fish.'
            price='Rs 250'
            button='Order Now'
          />
          <Product
            image={Laphing}
            name='Laphing'
            description='Ingredients: Red Pepper Chili, Coriander and Green Onion Sauce.'
            price='Rs 200'
            button='Order Now'
          />
          <Product
            image={Yomari}
            name='Yomari'
            description='Ingredients: Rice Flour and Filled With Brown Cane Sugar and Sesame Seeds.'
            price='Rs 200'
            button='Order Now'
          />

        </div>
        <div className="menu-down">
          <Product
            image={Yangben}
            name='Yangben'
            description='Ingredients: With Meat, Especially Pork and Blood .'
            price='Rs 300'
            button='Order Now'
          />

          <Product
            image={TingMomo}
            name='Ting Momo'
            description='Ingredients: Flour, Salt, Sugar, Dry instant yeast, Warm water and Vegetable Oil.'
            price='Rs 200'
            button='Order Now'
          />
          <Product
            image={Bhakka}
            name='Bhakka'
            description='Ingredients: With Rice Flour and Water.'
            price='Rs 150'
            button='Order Now'
          />
          <Product
            image={Biryani}
            name='Biryani'
            description='Ingredients: With Yogurt, Mint leaves, Salt, Onion, Tumeric, Garlic Paste, Ghee, Chicken and  Garam Masala Powder.'
            price='Rs 450'
            button='Order Now'
          />
        </div>

      </div>

    </>
  )
}

export default Menu