import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavbarComponent from './NavbarComponent';

function App() {
  return(
  <Router> 
    <NavbarComponent/>
    <div className="App">
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;