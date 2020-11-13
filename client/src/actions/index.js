// import axios from "axios";

// export const fetchUser = () => async (dispatch, getState) => {
//   const response = await axios.get("/api/current_user");
//   dispatch({
//     type: "fetch_user",
//     payload: response.data,
//   });
// };

export const fetchUser = () => {
  return {
    type: "fetch_user",
    payload: "Heeeey",
  };
};
