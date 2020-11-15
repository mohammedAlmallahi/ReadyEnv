import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import * as actions from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <div>
        <AppBar color="secondary" position="fixed">
          <Toolbar>
            <Typography variant="h4">Engage</Typography>
          </Toolbar>
        </AppBar>
        <h1>{console.log(this.props.user)}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.isAuth,
  };
}

export default connect(mapStateToProps, actions)(Home);
