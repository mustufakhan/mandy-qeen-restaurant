const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model("User")
const router = express.Router()
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport');
const {SENDGRID_API} = require('../config/keys')

const transporter = nodemailer.createTransport(sendgridTransport({
  auth:{
    api_key:SENDGRID_API
  }
}))

router.post('/signin',(req,res)=>{
  const {email, password} = req.body
  if(!email || !password){
    res.status(422).json({error:"please add all details"})
  }
  User.findOne({email:email})
  .then(user=>{
    if(!user || user.password != password){
      return res.status(422).json({error:"invalid email or password"})
    }
    else{
      const {_id, email} = user
      res.json({success: true, user:{_id, email}})
    }
  })
})

router.post('/contact-us',(req,res)=>{
  const {name, email, title, description} = req.body
  if(!email || !name || !title || !description){
    res.status(422).json({error:"please add all details"})
  }
  transporter.sendMail({
    to:"mohd.mustufa@adwaretech.com",
    from: email,
    subject:"contact-us",
    html:`
    <p>${name} send you an email</p>
    `
  })
  res.json({message:"check your email", success: true})
})

module.exports = router