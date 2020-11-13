import { combineReducers } from "redux";
import fetchingUser from "./authReducers";

export default combineReducers({
  auth: fetchingUser,
});
