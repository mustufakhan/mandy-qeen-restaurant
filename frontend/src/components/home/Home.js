import React, { Component,useEffect } from 'react'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import './Home.css'
import About from '../about/About'
import Gallery from '../gallery/Gallery'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Home = (props) => {
	useEffect(() => {
		window.scroll(0, props.val)
  },[props.val]);

  return (
        <div className="main">
            <Navbar />
            <div className="img">
                <img src="https://res.cloudinary.com/simplemenu/image/upload/q_auto:low/v1512189393/iStock-464455662_myr9xg.jpg" />
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
