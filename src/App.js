import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import HomePage from './containers/HomePage/HomePage';

import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="static">
          <Navbar classes="navbar"></Navbar>
                    
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
