import axios from "axios";

export const signUp = (formData) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:4000/api/users/register",
    formData
  );
  dispatch({
    payload: response.data,
  });
};

export const signIn = (formData) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:4000/api/users/logIn",
    formData
  );
  dispatch({
    type: "signIn",
    payload: response.data,
  });
};

export const auth = (token) => async (dispatch) => {
  const response = await axios.get("http://localhost:4000/api/users/auth", {
    headers: { Authorization: token },
  });
  dispatch({
    type: "auth",
    payload: response.data,
  });
};
