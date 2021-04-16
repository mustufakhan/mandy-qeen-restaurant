import React from 'react'
import Navbar from '../navbar/Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="formbox">
        <form>
          <p>Enter your name:</p>
          <input
            type="text"
            className="frominput"
          />
          <p>Enter your Email:</p>
          <input
            type="text"
            className="frominput"
          />
          <p>Title:</p>
          <input
            type="text"
            className="frominput"
          />
          <p>Description:</p>
          <textarea
            className="frominput"
          /><br/><br/>
          <input
            type='submit'
            className="submitbutton"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
