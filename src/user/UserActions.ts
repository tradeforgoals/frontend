import { Action } from 'redux';
import { UserState, AdditionalUserData } from './UserState';

export enum TypeKeys {
  GET_USER_DETAILS = 'GET_USER_DETAILS',
  SET_USER_DETAILS = 'SET_USER_DETAILS',
  CLEAR_USER_DETAILS = 'CLEAR_USER_DETAILS'
}

export interface GetUserDetailsAction extends Action {
  type: TypeKeys.GET_USER_DETAILS;
  userId: string;
}

export interface ClearUserDetailsAction extends Action {
  type: TypeKeys.CLEAR_USER_DETAILS;
}

export interface SetUserDetailsAction extends Action {
  type: TypeKeys.SET_USER_DETAILS;
  payload: AdditionalUserData;
}

export type UserActionTypes =
  SetUserDetailsAction |
  ClearUserDetailsAction |
  GetUserDetailsAction;

export const setUserDetailsAction = (payload: any) => ({ type: TypeKeys.SET_USER_DETAILS, payload });
export const clearUserDetailsAction = () => ({ type: TypeKeys.CLEAR_USER_DETAILS });
export const getUserDetailsAction = (userId: string) => ({ type: TypeKeys.GET_USER_DETAILS, userId });