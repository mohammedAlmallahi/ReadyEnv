const initialState = {
  isAuth: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "auth":
      return action.payload || false;
    default:
      return state;
  }
};
