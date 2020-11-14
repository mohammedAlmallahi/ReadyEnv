import axios from "axios";

export const fetchUser = () => async (dispatch, getState) => {
  const response = await axios.get("http://localhost:4000/");
  dispatch({
    type: "fetch_user",
    payload: response.data.message,
  });
};

// export const fetchUser = () => {
//   return {
//     type: "fetch_user",
//     payload: "Heeeey",
//   };
// };
