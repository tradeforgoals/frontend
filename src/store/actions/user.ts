import * as actionTypes from "./actionTypes";

export const loginUser = (payload: object) => {
  // TODO: specify payload
  return {
    type: actionTypes.LOGIN_USER,
    payload
  };
};

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = (user: any) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user
  };
};

export const loginFailed = (error: string) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error
  };
};
