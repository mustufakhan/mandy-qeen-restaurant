import React, { Component, useRef } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	const history = useHistory();
	const aboutref = useRef(null);

	const handlenav = (e, val, urlname) =>{
		if(window.location.href.includes("/contact")){
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
							<a activeClass="active" to="home">Home</a>
						</li>
	          <li>
	          	<a onClick={(e) => handlenav(e, 850, "about")}>About</a>
	          </li>
	          <li>
	          	<a  href="#Menu">Menu</a>
	          </li>
	          <li>
	          	<a onClick={(e) => handlenav(e, 1500, "hours")}>Hours</a>
	          </li>
						<li>
							<NavLink  to="contact">Contact</NavLink>
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
