import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Home from "./Home";
import Search from "./Search";

import Login from './Login';
import PrivateRoute from './PrivateRoute';
// import Auth from '../Auth';
const MOVIE_API_URL = "http://localhost:3001/movie/";

const App = () => {


  // const auth = new Auth();

  return (
    <div className="App">
        <Router>
           <Header text="HOOKED" />
           <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          
            {/* {auth.isAuthenticated() ?
            <Route exact path="/Movie" component={Movie} /> : ''
            } */}
            <Route exact path="/Movie" component={Movie} /> 

           </Switch>

        </Router>
    </div>
  );
};

export default App;
