import React from 'react'
// import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Firstpg from './pages/Firstpg'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Addtocart from './pages/Addtocart'
import ContactUs from './pages/ContactUs'
import Order from './pages/Order'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Firstpg/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/addtocart" element={<Addtocart/>} />
              <Route path="/order" element={<Order/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App