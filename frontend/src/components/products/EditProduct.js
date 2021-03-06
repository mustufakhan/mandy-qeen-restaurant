import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
import Allproducts from './Allproducts'

export const EditProduct = (props) => {
  const history = useHistory()
  const handleLogout = () =>{
    localStorage.clear()
    history.push('/')
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, true);
  });
  const data = props?.history?.location?.state?.pro
  const cat = props?.history?.location?.state?.cat

  const [categoryId, setCategoryId] =useState(data.categoryId)
  const [title, setTitle] =useState(data.title)
  const [description, setDescription] =useState(data.description)
  const [price, setPrice] =useState(data.price)
  const [Image, setImage] = useState(null);
  const [productShow, setProductShow] = useState(true);
  const [handleCategoryShow, setHandleCategoryShow] = useState(false);
  const [addCategoryName, setAddCategoryName] =useState("")
  const [addCategoryNames, setAddCategoryNames] =useState('')
  const [options, setOptions] =useState([])
  const [showAllPrducts, setShowAllPrducts] =useState(false)

  useEffect(() => {
    M.AutoInit();
    fetch(`${process.env.REACT_APP_URL}/all-category`,{
      method:"get",
      headers:{
        "Content-Type":"application/json"
      },
    }).then(res=>res.json())
    .then(result=>{
      setOptions(result.category)
    })
  }, [ , productShow, handleCategoryShow]);


  // const handleCategoryChange = (e) => {
  //   setCategoryName(e.target.value)
  // }

  const handleImageChange = (e) =>{
    const file= URL.createObjectURL(e.target.files[0])
    setImage(file)
  }
  const handleProductAddShow = (e) => {
    setHandleCategoryShow(false)
    setProductShow(true)
  }
  const handleCategoryAddShow = (e) => {
    setHandleCategoryShow(true)
    setProductShow(false)
  }
  const handleCategoryNameAdd = (e) =>{
    setAddCategoryName(e.target.value)
  }

  const handleAllProducts = () =>{
  //  setShowAllPrducts(true)
  //  setHandleCategoryShow(false)
  //  setProductShow(false)
  history.push('/all-products')

  }

  const handleCategoryNameAddSubmit = (e) =>{
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/category`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: addCategoryName
      })
    }).then(res=>res.json())
    .then(result=>{
      if(result.success){
        M.toast({html: "Category successfully added", classes:"#4caf50 green"})
        setAddCategoryName("");
      }else{
        M.toast({html: result.error, classes:"#4caf50 red"})
      }
    })
  }

  const editProduct = (e) =>{
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/update-product/${data._id}`,{
      method:"put",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        price,
        title,
        description,
        Image,
        categoryId,
      })
    }).then(res=>res.json())
    .then(result=>{
      if(result.success){
        M.toast({html: "Category successfully updated", classes:"#4caf50 green"})
        setAddCategoryName("");
        history.push('/all-products')
      }else{
        M.toast({html: "result.error", classes:"#4caf50 red"})
      }
    })
  }
  console.log(cat)
  return (
    <div> 
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        style={{right: '10px' ,position: 'absolute',top: '13px'}}
        onClick={handleLogout}
      >
        Logout
      </button>
      <Navbar/>
      <div style={{display:"flex",justifyContent:'center', margin:'10px'}}>
        <button class="btn waves-effect waves-light" onClick={handleCategoryAddShow}>Add Category</button>
        <button class="btn waves-effect waves-light" onClick={handleProductAddShow}>Add Products</button>
        <button class="btn waves-effect waves-light" onClick={handleAllProducts}>All Products</button>
      </div>
       { productShow && <div className="box">
        <div className="formbox1">
          <form onSubmit={(e)=>editProduct(e)}>
            <h5>Add Product</h5>
            <label>
              Choose Category:
            </label>
            <select id="cars">
              <option value={cat.name} selected>{cat.name}</option>
            </select>
            <p>Title:</p>
            <input
              type="text"
              className="frominput"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
            <p>Description:</p>
            <input
              type="text"
              className="frominput"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
            <p>Price:</p>
            <input
              type="number"
              className="frominput"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
            {/* <p>Product Image:</p>
            <input
              className="testfile"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            /><br/> */}
            <br/><br/><br/>
            <input type="submit" value="Submit" style={{cursor:'pointer'}}/>
          </form>
        </div>
      </div> }
      { handleCategoryShow && <div className="box">
        <div className="formbox1">
          <form onSubmit={handleCategoryNameAddSubmit}>
           <h5>Add Category</h5>
           <p>Category Name:</p>
            <input
              type="text"
              className="frominput"
              value={addCategoryName}
              onChange={handleCategoryNameAdd}
            /><br/><br/><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div> }
      {/* {
         showAllPrducts && <Allproducts/>
      } */}
    </div>
  )
}
