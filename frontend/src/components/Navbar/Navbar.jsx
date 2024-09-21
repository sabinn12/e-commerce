import React, { useState } from 'react' 

import './Navbar.css'

import logo from '../ASSETS/Frontend_Assets/logo.png'

import cart_icon from '../ASSETS/Frontend_Assets/cart_icon.png'

const Navbar = () => {

   const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">

            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt='cart-icon' />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}


export default Navbar