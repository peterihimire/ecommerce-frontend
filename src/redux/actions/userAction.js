import * as actionTypes from "./actionTypes";
import userAPI from "../api/user";

export const loginStart = (payload) => {
  return {
    type: actionTypes.USER_LOGIN_START,
    payload,
  };
};

export const loginError = (payload) => {
  return {
    type: actionTypes.USER_LOGIN_ERROR,
    payload,
  };
};

export const loginResponse = (payload) => {
  return {
    type: actionTypes.USER_LOGIN_RESPONSE,
    payload,
  };
};

export const logoutResponse = () => {
  return {
    type: actionTypes.USER_LOGOUT_RESPONSE,
  
  };
};

// login

export const login = (payload) => {
  return async (dispatch) => {
    dispatch(loginStart(true));

    try {
      const response = await userAPI.loginUser(payload);
      console.log(response);
      // console.log(response.data.accessToken);
      const { data } = response.data;
      localStorage.setItem("ecommerce_user", JSON.stringify(data));
      await dispatch(loginResponse(data));
      return Promise.resolve(data);
    } catch (err) {
      console.log(err);
      // dispatch(loginError(err.response));
      return Promise.reject(err);
    } finally {
      dispatch(loginStart(false));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const res = await userAPI.logoutUser();
      return Promise.resolve(res.message);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      localStorage.removeItem("ecommerce_user");
      await dispatch(logoutResponse());
    }
  };
};