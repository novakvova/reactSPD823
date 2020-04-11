import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import FriendPage from './components/FriendPage';
import PrivatBank from './components/PrivatBank';

class App extends Component {
  render() {
    console.log("------APP RENDER-----")
    return (
      <Router>
        <div className="container">
          <Navbar/>
        <Switch>

          <Route exact path='/' >
            <Home />
          </Route>

          <Route exact path='/friends' >
            <FriendPage />
          </Route>

          <Route exact path='/privat' >
            <PrivatBank />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
