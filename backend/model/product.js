const mongoose =  require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  description:{
    type: String,
    required:true
  },
  cost:{
    type: Number,
    required:true
  },
  category_id:{
    type:ObjectId,
    ref:"Category"
  },
})
mongoose.model("Product",productSchema)