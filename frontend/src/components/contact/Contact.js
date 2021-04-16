import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import './Contact.css'
import M from 'materialize-css'

const Contact = () => {
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [title, setTitle] =useState('')
  const [description, setDescription] =useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
      return
    }
    fetch(`${process.env.REACT_APP_URL}/contact-us`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        title,
        email,
        description
      })
    }).then(res=>res.json())
    .then(result=>{
      if(result.success){
        M.toast({html: result.message, classes:"#4caf50 green"})
      }else{
        M.toast({html: result.error, classes:"#4caf50 red"})
      }
    })
  }
  return (
    <div>
      <Navbar />
      <div className="box">
        <div className="formbox">
          <h1>Contact us</h1>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <p>Enter your name:</p>
            <input
              type="text"
              className="frominput"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <p>Enter your Email:</p>
            <input
              type="text"
              className="frominput"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <p>Title:</p>
            <input
              type="text"
              className="frominput"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
            />
            <p>Description:</p>
            <textarea
              className="frominput"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
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

export default Contact
