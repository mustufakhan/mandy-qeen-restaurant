import React from 'react'
import Navbar from '../navbar/Navbar'
import {useHistory} from 'react-router-dom'

export const Product = () => {
  const history = useHistory()
  const handleLogout = () =>{
    localStorage.clear()
    history.push('/')
  }
  return (
    <div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        style={{right: '10px' ,position: 'absolute',top: '13px'}}
        onClick={handleLogout}
      >
        Logout
      </button>
      <Navbar/>
      <h2>Products list</h2>
    </div>
  )
}
