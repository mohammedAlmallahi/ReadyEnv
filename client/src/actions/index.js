import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("http://localhost:4000/");
  dispatch({
    type: "fetch_user",
    payload: response.data.message,
  });
};

export const auth = () => async (dispatch) => {
  const response = await axios.get("http://localhost:4000/api/users/auth");
  dispatch({
    type: "auth",
    payload: response.data,
  });
};
