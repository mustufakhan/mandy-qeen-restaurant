import React,{useState, } from 'react'
import Navbar from '../navbar/Navbar'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
import './Login.css'

export const Login = () => {
  const history = useHistory()
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const onsubmit = (e) => {
    e.preventDefault()
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        return
    }
    fetch("http://localhost:5000/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        password,
        email
      })
    }).then(res=>res.json())
    .then(result=>{
      if(result.success){
        M.toast({html: "Your are successfully loggedIn", classes:"#4caf50 green"})
        localStorage.setItem("user",JSON.stringify(result.user))
        history.push('/products')
      }else{
        M.toast({html: result.error, classes:"#4caf50 red"})
      }
    })
  }
  return (
    <div>
      <Navbar />
      <div className="box">
        <div className="formbox1">
          <h1>Login</h1>
          <form onSubmit={(e)=>onsubmit(e)}>
            <p>Enter your Email:</p>
            <input
              type="text"
              className="frominput"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <p>Password:</p>
            <input
              type="password"
              className="frominput"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            /><br/><br/>
            <input
              type='submit'
              className="submitbutton"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
