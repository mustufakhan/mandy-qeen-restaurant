const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model("User")
const router = express.Router()

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
module.exports = router