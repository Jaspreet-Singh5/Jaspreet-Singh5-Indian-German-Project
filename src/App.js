import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './App.css';
import HomePage from './containers/HomePage/HomePage';

import Navbar from './components/Navbar/Navbar';
import LoginForm from './containers/LoginForm/LoginForm';
import SignUpForm from './containers/SignUpForm/SignUpForm';
import HealthForm from './containers/ReportingForms/HealthForm/HealthForm.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="static">
          <Navbar classes="navbar"></Navbar>

          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/reporting/health" component={HealthForm} />
            <Route path="/" component={HomePage} />  
          </Switch>
          
          {/* <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
