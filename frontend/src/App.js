import './App.css';
import Home from './Components/home/Home'
import Contact from './Components/contact/Contact'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import { Login } from './Components/login/Login';

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
