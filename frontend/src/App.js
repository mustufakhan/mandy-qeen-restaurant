import './App.css';
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
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
          <Route exact path ='/contact'>
            <Contact/>
          </Route>
          <Route exact path ='/admin'>
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
