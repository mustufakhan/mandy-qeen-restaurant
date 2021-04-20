import React, {useEffect} from 'react'
import './App.css';
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'
import Menu from '../components/menu/Menu'
import {BrowserRouter, Route, Switch, useHistory, Redirect} from 'react-router-dom'
import { Login } from '../components/login/Login';
import { Product } from '../components/products/Product';
import PrivateRoutes from './PrivateRoutes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Home val={0}/>
          </Route>
          <Route exact path ='/hours'>
            <Home val={1500}/>
          </Route>
          <Route exact path ='/press'>
            <Home val={1800}/>
          </Route>
          <Route exact path ='/about'>
            <Home val={850}/>
          </Route>
          <Route exact path ='/contact'>
            <Contact/>
          </Route>
          <Route exact path ='/admin'>
            <Login/>
          </Route>
          <Route exact path ='/menu'>
            <Menu/>
          </Route>
          <PrivateRoutes path="/products" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
