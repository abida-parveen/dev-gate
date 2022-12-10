import { GET_USER, SET_USER } from "../types";

const initialState = "";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
