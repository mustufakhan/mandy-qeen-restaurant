import React from 'react'
import './Menu.css'
import Navbar from '../navbar/Navbar'

 const Menu = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <h2 className="menu">Menu</h2>
        <ul className="collapsible">
        <li>
          <div className="collapsible-header"><i className="material-icons">chevron_right</i> Special of the day (no rice)</div>
          <div className="collapsible-body">
            <div className="menucontent">
              <div>
                <h3>Shrimp paste fried rice</h3>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h3>$15.95</h3></div>
            </div>
            <div className="menucontent">
              <div>
                <h3>Shrimp paste fried rice</h3>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h3>$15.95</h3></div>
            </div>
          </div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">chevron_right</i> Fillet fish (sole) or Whole Fish (Striped bass) (N</div>
          <div className="collapsible-body">
            <div className="menucontent">
              <div>
                <h3>Shrimp paste fried rice</h3>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h3>$15.95</h3></div>
            </div>
            <div className="menucontent">
              <div>
                <h3>Shrimp paste fried rice</h3>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h3>$15.95</h3></div>
            </div>
          </div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">chevron_right</i> Fried Rice & Over Rice Plates</div>
          <div className="collapsible-body">
            <div className="menucontent">
              <div>
                <h3>Shrimp paste fried rice</h3>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h3>$15.95</h3></div>
            </div>
            <div className="menucontent">
              <div>
                <h3>Shrimp paste fried rice</h3>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h3>$15.95</h3></div>
            </div>
          </div>
        </li>
        </ul>
      </div>
    </div>
  )
}
export default Menu