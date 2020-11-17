import React, { Component } from "react";
import signUpField from "../Fields/customField";
import "./signUp.css";
import Particles from "react-particles-js";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

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

class SignUp extends Component {
  formSubmition = (values) => {
    const { name, email, password, userType } = values;
    const FormData = {
      name,
      email,
      password,
      userType,
    };
    this.props.signUp(FormData);
  };
  render() {
    return (
      <div className="full_page">
        <Particles params={particlesOptions} className="particls" />
        <div className="container">
          <form
            onSubmit={this.props.handleSubmit(this.formSubmition)}
            className="form"
          >
            <div className="signIn">Sign Up</div>
            <Field
              label="Name"
              type="text"
              name="name"
              component={signUpField}
            />
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
            <Field
              label="User Type"
              type="select"
              name="userType"
              component={signUpField}
            />
            <button type="submit" className="signUpButton">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "you must provide a name";
  }
  if (!values.email) {
    errors.email = "you must provide a email";
  }
  if (!values.password) {
    errors.password = "you must provide a password";
  }
  if (!values.userType) {
    values.userType = "user";
  }

  return errors;
};

const Signup = compose(
  reduxForm({ form: "signUp", validate: validate }),
  connect(null, actions)
)(SignUp);

export default Signup;
