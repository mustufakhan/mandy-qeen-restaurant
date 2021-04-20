import React,{useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

export const Allproducts = () => {
  const history = useHistory()

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, true);
  });
  const [products, setProducts] =useState([])
  const [category, setCategory] =useState([])

  useEffect(() => {
   M.AutoInit();
   fetch(`${process.env.REACT_APP_URL}/all-products`,{
    method:"get",
    headers:{
      "Content-Type":"application/json"
    },
  }).then(res=>res.json())
  .then(result=>{
    setProducts(result.products)
    setCategory(result.category)
  })
  }, []);

  const handleLogout = () =>{
    localStorage.clear()
    history.push('/')
  }

  const handleBack = () =>{
    history.push('/products')
  }
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
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        style={{left: '10px' ,position: 'absolute',top: '13px'}}
        onClick={handleBack}
      >
        Back
      </button>
      <Navbar/>
      <h3>All Products</h3>
      <ul className="collapsible">{
        category?.map((cat)=>{
          return(
            <li>
              <div className="collapsible-header"><i className="material-icons">chevron_right</i> {cat.name}</div>
              
              <div className="collapsible-body">
                <div className="menucontent">
                  <div>
                    {products?.map((pro)=>{
                      if(pro.categoryId === cat._id){
                        return(
                          <>
                            <div>
                              <h5>{pro.title}</h5>
                              <p>{pro.description}</p>
                            </div>
                            <div><h5>${pro.price}</h5></div>
                          </>
                        )
                      }else{
                        return(
                          <p>No product</p>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}