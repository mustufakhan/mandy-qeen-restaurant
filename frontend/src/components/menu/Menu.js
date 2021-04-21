import React, {useEffect, useState} from 'react'
import './Menu.css'
import Navbar from '../navbar/Navbar'
import M from 'materialize-css'

const Menu = () => {
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

  return (
    <div>
      <Navbar/>
      <h3 className="menuheading">Menu</h3>
      <ul className="collapsible">{
        category?.map((cat)=>{
          return(
            <li>
              <div className="collapsible-header menucategory"><i className="material-icons">chevron_right</i> {cat.name}</div>
              <div className="collapsible-body menubody">
                <div className="menucontent">
                  <div>
                    {products?.map((pro)=>{
                      if(pro.categoryId === cat._id){
                        return(
                          <div  style={{display:"flex"}}>
                            <div>
                            {/* <img src={pro.image} height='100px'/> */}
                              <h5>{pro.title}</h5>
                              <p>{pro.description}</p>
                            </div>
                            <div style={{position: "absolute", right: "30px"}}><h5>${pro.price}</h5></div>
                          </div>
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
      {
        category.length == 0 && <h3 style={{color:'grey'}}>Loading....</h3>
      }
    </div>
  )
}
export default Menu