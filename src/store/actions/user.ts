import * as actionTypes from "./actionTypes";

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface RegisterUserPayload {
  username: string;
  firstname: string;
  lastname: string;
  city: string;
  email: string;
  password: string;
  password_confirm: string;
}

export const loginUser = (payload: LoginUserPayload) => {
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
export const registerUser = (payload: RegisterUserPayload) => {
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
