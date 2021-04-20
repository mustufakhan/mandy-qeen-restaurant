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
      <h3>Menu</h3>
      <ul className="collapsible">{
        category?.map((cat)=>{
          return(
            <li>
              <div className="collapsible-header"><i className="material-icons">chevron_right</i> {cat.name}</div>
              <div className="collapsible-body">
                <div className="menucontent">
                  <div>
                    {products?.map((pro)=>{
                      return(
                        <>
                          <div>
                            <h5>{pro.title}</h5>
                            <p>{pro.description}</p>
                          </div>
                          <div><h5>${pro.price}</h5></div>
                        </>
                      )
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
export default Menu