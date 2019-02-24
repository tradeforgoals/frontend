import * as actionTypes from './actionTypes';
import { Action } from 'redux';

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

export interface LoginUserAction extends Action {
  type: string;
  payload: LoginUserPayload;
}

export interface RegisterUserAction extends Action {
  type: string;
  payload: RegisterUserPayload;
}

export const loginUser = (payload: LoginUserPayload): LoginUserAction => {
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

export const loginSuccess = (user: object) => {
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
export const registerUser = (payload: RegisterUserPayload): RegisterUserAction => {
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

export const registrationSuccess = (payload: object) => {
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
