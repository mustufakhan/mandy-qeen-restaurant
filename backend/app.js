const express = require('express');
const app = express();
const cors = require ('cors')
const bodyParser = require("body-parser")
const mongoose  = require('mongoose')
const {MONGOURI} = require('./config/keys')
app.use(bodyParser.json())
app.use(cors())

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

require('./model/user')
app.use(express.json())
app.use(require('./routes/auth'))

app.listen(5000,()=>{
	console.log('server running')
})