import { Action } from 'redux';
import { Item } from './Items';

export enum TypeKeys {
  GET_ITEM_DETAILS = 'GET_ITEM_DETAILS',
  SET_ITEM_DETAILS = 'SET_ITEM_DETAILS',
  GET_ITEM_FAILED = 'GET_ITEM_FAILED',
}

export type ItemActionTypes = GetItemAction | GetItemFailed | SetItemAction;

export interface GetItemAction extends Action {
  type: TypeKeys.GET_ITEM_DETAILS;
  itemId: number;
}

export interface GetItemFailed extends Action {
  type: TypeKeys.GET_ITEM_FAILED;
  error: string;
}

export interface SetItemAction extends Action {
  type: TypeKeys.SET_ITEM_DETAILS;
  payload: Item;
}

export const setItemAction = (payload: Item) => ({
  type: TypeKeys.SET_ITEM_DETAILS,
  payload,
});
export const getItemAction = (itemId: number) => ({
  type: TypeKeys.GET_ITEM_DETAILS,
  itemId,
});

export const getItemFailed = (error: string) => ({
  type: TypeKeys.GET_ITEM_FAILED,
  error,
});
