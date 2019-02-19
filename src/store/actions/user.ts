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

// Registration
export const registerUser = (payload: object) => {
  // TODO: specify payload
  return {
    type: actionTypes.REGISTER_USER,
    payload
  };
};
export const registrationStart = () => {
  return {
    type: actionTypes.REGISTRATION_START
  };
};

export const registrationSuccess = (payload: any) => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS
  };
};

export const registrationFailed = (error: string) => {
  return {
    type: actionTypes.REGISTRATION_FAILED,
    error
  };
};
