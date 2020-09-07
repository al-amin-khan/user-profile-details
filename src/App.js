import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import User from './components/User/User'
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch'
import UserDetail from './components/UserDetail/UserDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/detail/:id'>
            <UserDetail></UserDetail>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
