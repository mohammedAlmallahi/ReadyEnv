import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/auth";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Switch>
        {/* <Route exact path="/edit-price" component={Auth(EditPrice, true)} />
        <Route exact path="/orders" component={Auth(Orders, true)} />
        <Route exact path="/Add-Email" component={Auth(AddEmail, true)} />
        <Route exact path="/checkout" component={Auth(Checkout, true)} />
        <Route
          exact
          path="/admin/addChannel"
          component={Auth(ChannelForm, true, true)}
        />
        <Route exact path="/products" component={Auth(SingHome, true)} />
        <Route
          exact
          path="/user/dashboard"
          component={Auth(UserDashboard, true)}
        />
        <Route exact path="/sign_up" component={Auth(Register, false)} />
        <Route
          exact
          path="/register_login"
          component={Auth(RegiserLogIN, false)}
        /> */}
        {/* 
        <Route exact path="/" component={Auth(Home, null)} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps, actions)(App);
