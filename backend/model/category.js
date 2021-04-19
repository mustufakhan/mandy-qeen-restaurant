const mongoose =  require('mongoose')
const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
  },
})
mongoose.model("Category",categorySchema)