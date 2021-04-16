import './App.css';
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import { Login } from './components/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route exact path ='/hours'>
            <Home/>
          </Route>
          <Route exact path ='/press'>
            <Home/>
          </Route>
          <Route exact path ='/about'>
            <Home/>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
