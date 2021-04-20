const mongoose =  require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const productSchema = new mongoose.Schema({
  title:{
    type: String,
    required:true
  },
  description:{
    type: String,
    required:true
  },
  price:{
    type: Number,
    required:true
  },
  image:{
    type:String,
    default:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
   },
  categoryId:{
    type:ObjectId,
    ref:"Category"
  },
})
mongoose.model("Product",productSchema)