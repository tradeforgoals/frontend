import { Action } from 'redux';
import { AdditionalUserData, User } from './UserState';

export enum TypeKeys {
  GET_USER_DETAILS = 'GET_USER_DETAILS',
  SET_USER_DETAILS = 'SET_USER_DETAILS',
  CLEAR_USER_DETAILS = 'CLEAR_USER_DETAILS',
  SAVE_USER_DETAILS = 'SAVE_USER_DETAILS',
}

export interface GetUserDetailsAction extends Action {
  type: TypeKeys.GET_USER_DETAILS;
  user: User;
}

export interface ClearUserDetailsAction extends Action {
  type: TypeKeys.CLEAR_USER_DETAILS;
}

export interface SetUserDetailsAction extends Action {
  type: TypeKeys.SET_USER_DETAILS;
  user: AdditionalUserData;
}

export interface SaveUserDetailsAction extends Action {
  type: TypeKeys.SAVE_USER_DETAILS;
  user: User;
}

export type UserActionTypes =
  | SetUserDetailsAction
  | ClearUserDetailsAction
  | GetUserDetailsAction
  | SaveUserDetailsAction;

export const setUserDetailsAction = (user: AdditionalUserData) => ({ type: TypeKeys.SET_USER_DETAILS, user });
export const clearUserDetailsAction = () => ({ type: TypeKeys.CLEAR_USER_DETAILS });
export const getUserDetailsAction = (user: User) => ({ type: TypeKeys.GET_USER_DETAILS, user });
export const saveUserDetailsAction = (user: User) => ({ type: TypeKeys.SAVE_USER_DETAILS, user });
