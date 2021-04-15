const express = require('express');
const app = express();
const mongoose  = require('mongoose')
const {MONGOURI} = require('./config/keys')

mongoose.connect(MONGOURI,{
	useNewUrlParser:true,
	useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
	console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
	console.log("err connecting",err)
})

app.listen(4000,()=>{
	console.log('server running')
})