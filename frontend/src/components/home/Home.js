import React, { Component } from 'react'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import './Home.css'
import About from '../about/About'
import Gallery from '../gallery/Gallery'
import Footer from '../footer/Footer'

const Home = () => {
  return (
		<div className="main">
			<div className="navbar"> 
				<h1>CHAO THAI</h1>
				<div className="links">
					<ul>
						<li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="Menu" spy={true} smooth={true}>Menu</Link></li>
          <li><Link  to="hour" spy={true} smooth={true}>Hours</Link></li>
					<li><NavLink  to="contact">Contact</NavLink></li>
					<li><Link  to="press" spy={true} smooth={true}>Press</Link></li>
					<li><Link  to="order" spy={true} smooth={true}>Order Online</Link></li>
					</ul>
				</div>
				<div className="img">
					<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1512189393/iStock-464455662_myr9xg.jpg" />
				</div>
			</div>
			<About/>
			<Gallery/>
			<div className="hour_section" id="hour">
				<h1>Hours</h1>
				<p>Monday - Sunday</p>
				<p>11:00 AM - 11:00 PM</p>
			</div>
			<div className="press_section" id="press">
				<h1>Press</h1>
				<div className="press_img">
					<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1515030322/trip_advisor_epcaxc.png" height="120px" />
					<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1515030322/trip_advisor_epcaxc.png" height="120px"/>	
					<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1515030322/trip_advisor_epcaxc.png" height="120px" />	
					<img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1515030322/trip_advisor_epcaxc.png" height="120px"/>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Home
