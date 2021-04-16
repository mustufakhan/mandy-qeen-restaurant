import React, { Component, useRef } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const history = useHistory();
  const aboutref = useRef(null);

  const handlenav = (e, val, urlname) =>{
    if(window.location.href.includes("/contact") || window.location.href.includes("/menu")){
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
              <NavLink activeClass="active" to="/">Home</NavLink>
            </li>
            <li>
              <a onClick={(e) => handlenav(e, 850, "about")}>About</a>
            </li>
            <li>
              <NavLink  to="/menu">Menu</NavLink>
            </li>
            <li>
              <a onClick={(e) => handlenav(e, 1500, "hours")}>Hours</a>
            </li>
            <li>
              <NavLink  to="/contact">Contact</NavLink>
            </li>
            <li>
              <a onClick={(e) => handlenav(e, 1600, "press")}>Press</a>
            </li>
            <li>
              <a href="#order">Order Online</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
