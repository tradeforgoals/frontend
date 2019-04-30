import { Action } from 'redux';
import { Category } from './CategoriesState';

export enum TypeKeys {
  GET_CATEGORIES = 'GET_CATEGORIES',
  SET_CATEGORIES = 'SET_CATEGORIES'
}

export interface GetCategoriesAction extends Action {
  type: TypeKeys.GET_CATEGORIES;
}

export interface SetCategoriesAction extends Action {
  type: TypeKeys.SET_CATEGORIES;
  payload: Category[];
}

export type CategoriesActionTypes =
  GetCategoriesAction |
  SetCategoriesAction;

export const setCategoriesAction = (payload: Category[]) => ({ type: TypeKeys.SET_CATEGORIES, payload });
export const getCategoriesAction = () => ({ type: TypeKeys.GET_CATEGORIES });