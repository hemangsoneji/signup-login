import './App.css';
import React from 'react';
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Enter from "./components/Enter";
import Home from "./components/Home";
// import axiosInstance from "./components/Access";
// import axios from 'axios';

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/enter">
            <Enter />
          </Route>
          <Route path = "/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;