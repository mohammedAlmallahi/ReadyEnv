import React from "react";

const SignUpField = (props) => {
  const {
    input,
    label,
    meta: { error, touched },
    type,
  } = props;

  const render = () => {
    if (type === "select") {
      return (
        <div>
          <label className="radioLabel">{label}</label>
          <select className="select" {...input}>
            <option className="selectOption" value="user">
              User
            </option>
            <option className="selectOption" value="artist">
              Artist
            </option>
          </select>
          <div className="ErrorShowing">{touched && error}</div>
        </div>
      );
    } else {
      return (
        <div>
          <label className="inputLabel">{label}</label>
          <input
            type={type}
            className="inputField"
            {...input}
            autoComplete="none"
          />
          <div className="ErrorShowing">{touched && error}</div>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
};

export default SignUpField;
