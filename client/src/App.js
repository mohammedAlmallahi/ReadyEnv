import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <h1>{this.props.auth || "not found"}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps, actions)(App);
