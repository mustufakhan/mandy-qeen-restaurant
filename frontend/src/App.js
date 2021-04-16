import React, {useEffect} from 'react'
import './App.css';
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import { Login } from './components/login/Login';
import { Product } from './components/products/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route exact path ='/contact'>
            <Contact/>
          </Route>
          <Route exact path ='/admin'>
            <Login/>
          </Route>
          <Route exact path ='/products'>
            <Product/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
