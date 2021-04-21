const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Category = mongoose.model("Category")
const Product = mongoose.model("Product")
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

router.post('/category',(req,res)=>{
  const {name} = req.body
  if(!name){
    res.status(422).json({error:"This field cant be blank"})
  }
  Category.find({name})
  .then((category)=>{
    if(category.length > 0){
			res.status(422).json({error:"category already exits"})
		}else{
      const category = new Category({
        name
      })
      category.save()
      .then(category=>{
        res.json({success: true})
      })
    }
  })
})

router.get('/all-category',(req,res)=>{
  Category.find({})
  .then((category)=>{
    res.json({category:category})
  })
})

router.post('/add-product',(req,res)=>{
  const {price, image, title, description, categoryId} = req.body
  if(!price || !title || !description || !categoryId){
    res.status(422).json({error:"please add all details"})
  }else{
    Category.findById(categoryId).then((category)=>{
      const product = new Product({
        title,
        description,
        image,
        price,
        categoryId: category ,
      })
      product.save()
      .then(product=>{
        res.json({success: true})
      })
    })
  }
})

router.get('/all-products',(req,res)=>{
  Product.find()
  .then(product=>{
    Category.find({})
    .then(category=>{
      res.json({products:product, category: category})
    })
  })
})

router.delete('/delete/:id',(req,res)=>{
  Product.findOne({_id: req.params.id})
  .then(pro=>{
    pro.remove()
    .then(result=>{
      res.json({success: true, result:result})
    }).catch(err=>{
      console.log(err)
    })
  })
})

router.put('/update-product/:id',(req,res)=>{
  const {price, image, title, description, categoryId} = req.body
	Product.findByIdAndUpdate(req.params.id,{$set:{title, price, description, image}},{new:true},
	(err,result)=>{
		if(err){
				return res.status(422).json({error:"pic canot post"})
		}
		res.json({result: result, success: true})
	})
})

module.exports = router