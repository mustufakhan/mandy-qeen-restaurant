import React, { Component, useRef } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const history = useHistory();
  const aboutref = useRef(null);

  const handlenav = (e, val, urlname) =>{
    if(window.location.href.includes("/contact") || window.location.href.includes("/menu") || window.location.href.includes("/admin") || window.location.href.includes("/products")){
      history.push("/");
      setTimeout(()=>window.scroll(0, val),50)
      window.history.pushState('','',urlname)
    }
    else
      window.scroll(0, val)
      window.history.pushState('','',urlname)

  }
  return (
    <div className="main">
      <div className="navbar">
        <h1>CHAO THAI</h1>
        <div className="links">
          <ul>
            <li>
              <NavLink activeClass="active" to="/">HOME</NavLink>
            </li>
            <li>
              <a onClick={(e) => handlenav(e, 850, "about")}>ABOUT</a>
            </li>
            <li>
              <NavLink  to="/menu">MENU</NavLink>
            </li>
            <li>
              <a onClick={(e) => handlenav(e, 1500, "hours")}>HOURS</a>
            </li>
            <li>
              <NavLink  to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <a onClick={(e) => handlenav(e, 1800, "press")}>PRESS</a>
            </li>
            <li>
              <a href="#order">ORDER ONLINE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
