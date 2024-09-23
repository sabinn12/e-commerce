import React, { useState } from 'react' 

import './Navbar.css'

import logo from '../ASSETS/Frontend_Assets/logo.png'

import cart_icon from '../ASSETS/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

   const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">

        <li onClick={() => { setMenu("shop") }}>
  <Link style={{textDecoration:"none"}} to="/">Shop</Link>
  {menu === "shop" ? <hr/> : <></>}
</li>

<li onClick={() => { setMenu("Men") }}>
  <Link style={{textDecoration:"none"}} to="/Men">Men</Link>
  {menu === "Men" ? <hr/> : <></>}
</li>

<li onClick={() => { setMenu("Women") }}>
  <Link style={{textDecoration:"none"}} to="/Women">Women</Link>
  {menu === "Women" ? <hr/> : <></>}
</li>

<li onClick={() => { setMenu("kids") }}>
  <Link style={{textDecoration:"none"}} to="/Kids">Kids</Link>
  {menu === "kids" ? <hr/> : <></>}
</li>

        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link>
           <Link to='/cart'><button><img src={cart_icon} alt='cart_icon' /></button></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}


export default Navbar