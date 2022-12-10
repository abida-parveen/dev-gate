import { GET_USER, LOGIN_ERROR, SET_USER } from "../types";

export const newUser = (data) => (dispatch) => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (!user) {
      localStorage.setItem("user", data.user);
      dispatch({
        type: SET_USER,
        payload: data,
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: "some error",
      });
    }
  }
};

export const getUser = () => (dispatch) => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({
        type: GET_USER,
        payload: user,
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: null,
      });
    }
  }
};

