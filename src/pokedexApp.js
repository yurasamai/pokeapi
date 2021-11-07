import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import {Switch} from "react-router"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './pokegameboyback.jpg';
import NavBar from './components/Navbar.js';
import Dashboard from './components/Dashboard';
import Pokemon from './components/PokeFetch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;