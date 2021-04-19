import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

export const Product = () => {
  const history = useHistory()
  const handleLogout = () =>{
    localStorage.clear()
    history.push('/')
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, true);
  });

  useEffect(() => {
   M.AutoInit();
  }, []);

  const [categoryName, setCategoryName] =useState('')
  const [title, setTitle] =useState('')
  const [description, setDescription] =useState('')
  const [price, setPrice] =useState('')
  const [Image, setImage] = useState([]);
  const [productShow, setProductShow] = useState(true);
  const [handleCategoryShow, setHandleCategoryShow] = useState(false);
  const [addCategoryName, setAddCategoryName] =useState("")
  const [addCategoryNames, setAddCategoryNames] =useState([])

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value)
  }

  const handleImageChange = (e) =>{
    //setImage(e.target.files[0]);
    if (e.target.files && e.target.files[0]){
    const reader = new FileReader();
    const objectURL = reader.readAsDataURL(e.target.files[0]);
    //const objectURL=URL.createObjectURL(e.target.files[0]);
    //setImage(pre=> [...pre,objectURL])
      reader.onloadend = function (e) {
        setImage(pre=> [...pre,reader.result])
      }
    }
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
  const handleCategoryNameAddSubmit = (e) =>{
    e.preventDefault();
    setAddCategoryNames(prev=>[...prev,addCategoryName]);
    setAddCategoryName("");
  }
  console.log("fdsff",addCategoryNames)
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
      <button class="btn waves-effect waves-light" onClick={handleProductAddShow}>Add Products</button>
      <button class="btn waves-effect waves-light" onClick={handleCategoryAddShow}>Add Category</button>
       { productShow && <div className="box">
        <div className="formbox1">
          <form>
            <h5>Add Product</h5>
            <label>
            Choose Category:
            <select value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}>
              <option value="" disabled selected>Choose Category</option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
              <option value="Category3">Category3</option>
              <option value="Category4">Category4</option>
            </select>
            </label>
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
            <p>Product Image:</p>
            <input
              className="testfile"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            /><br/>
            <br/><br/><br/>
            <input type="submit" value="Submit" />
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
    </div>
  )
}
