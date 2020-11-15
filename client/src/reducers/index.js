import { combineReducers } from "redux";
import fetchingUser from "./authReducers";
import { reducer as reduxForm } from "redux-form";
import auth from "./auth";

export default combineReducers({
  auth: fetchingUser,
  isAuth: auth,
  form: reduxForm,
});
