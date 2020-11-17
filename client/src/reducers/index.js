import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducers from "./authReducers";
import loginReducer from "./logInReducer";
import auth from "./auth";

export default combineReducers({
  signUp: authReducers,
  user: auth,
  form: reduxForm,
  login: loginReducer,
});
