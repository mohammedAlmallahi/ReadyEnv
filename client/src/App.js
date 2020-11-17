import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/login";
import SignUp from "./components/SignUp/signUp";
import Auth from "./HOC/auth";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/log_in" component={Auth(Login, false)} />
        <Route exact path="/sign_up" component={Auth(SignUp, false)} />
        <Route exact path="/" component={Auth(Home, null)} />
      </Switch>
    );
  }
}

export default App;
