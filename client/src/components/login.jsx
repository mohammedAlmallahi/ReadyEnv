import React, { Component } from "react";
import Particles from "react-particles-js";
import "./SignUp/signUp.css";
import signUpField from "./Fields/customField";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 330,
      },
    },
  },
};

class Login extends Component {
  formSubmition = (values) => {
    const { email, password } = values;
    const FormData = {
      email,
      password,
    };

    this.props.signIn(FormData);

    const { token, loginSuccess } = this.props;
    if (loginSuccess) {
      localStorage.setItem("w_auth", token);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="full_page">
        <Particles params={particlesOptions} className="particls" />;
        <div className="container">
          <form
            onSubmit={this.props.handleSubmit(this.formSubmition)}
            className="form"
          >
            <div className="signIn">Sign In</div>
            <Field
              label="Email"
              type="email"
              name="email"
              component={signUpField}
            />
            <Field
              label="password"
              type="password"
              name="password"
              component={signUpField}
            />

            <button type="submit" className="signUpButton">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.login.loginSuccess,
    token: state.login.token,
  };
};
const LogIn = compose(
  reduxForm({ form: "login" }),
  connect(mapStateToProps, actions)
)(Login);

export default LogIn;
