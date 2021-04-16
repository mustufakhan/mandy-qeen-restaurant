import React from 'react'
import './Menu.css'
import Navbar from '../navbar/Navbar'
import M from 'materialize-css'

  const Menu = () => {

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, true);
  });

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
                <h5>Shrimp paste fried rice</h5>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h5>$15.95</h5></div>
            </div>
            <div className="menucontent">
              <div>
                <h5>Shrimp paste fried rice</h5>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h5>$15.95</h5></div>
            </div>
          </div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">chevron_right</i> Fillet fish (sole) or Whole Fish (Striped bass) (N</div>
          <div className="collapsible-body">
            <div className="menucontent">
              <div>
                <h5>Shrimp paste fried rice</h5>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h5>$15.95</h5></div>
            </div>
            <div className="menucontent">
              <div>
                <h5>Shrimp paste fried rice</h5>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h5>$15.95</h5></div>
            </div>
          </div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">chevron_right</i> Fried Rice & Over Rice Plates</div>
          <div className="collapsible-body">
            <div className="menucontent">
              <div>
                <h5>Shrimp paste fried rice</h5>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h5>$15.95</h5></div>
            </div>
            <div className="menucontent">
              <div>
                <h5>Shrimp paste fried rice</h5>
                <p>Streamed rice mixed shrimp paste served with sweetened pork belly,dri ed shrimps,s weetened sausages,omelettes,mangoes,shallots, greens string beans,cucumbers,chillies,fr ied shallots and piece of lime</p>
              </div>
              <div><h5>$15.95</h5></div>
            </div>
          </div>
        </li>
        </ul>
      </div>
    </div>
  )
}
export default Menu