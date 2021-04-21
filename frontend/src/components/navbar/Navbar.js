import React, { Component, useRef } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const history = useHistory();
  const aboutref = useRef(null);

  const handlenav = (e, val, urlname) =>{
    history.push(`/${urlname}`);
  }
  return (
    <div className="main1">
      <div className="navbar">
        <h1>Mandyqueen Thai Restaurant</h1>
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
