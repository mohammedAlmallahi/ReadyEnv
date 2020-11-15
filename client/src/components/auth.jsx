import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default (childComponent, reload, adminRoute = null) => {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      this.props.auth();
    }
    componentDidUpdate() {}

    render() {
      if (this.state.loading) {
        return (
          <div className="main_loader">
            <CircularProgress style={{ color: "#2196F3" }} thickness={7} />
          </div>
        );
      }

      return <childComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.isAuth,
    };
  }

  return connect(mapStateToProps, actions)(AuthenticationCheck);
}; // end of the function
