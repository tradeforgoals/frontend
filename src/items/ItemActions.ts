import { Action } from 'redux';
import Items, { Item } from './Items';

export enum TypeKeys {
  GET_ITEMS = 'GET_ITEMS',
  GET_ITEM_DETAILS = 'GET_ITEM_DETAILS',
  SET_ITEMS = 'SET_ITEMS',
  SET_ITEM_DETAILS = 'SET_ITEM_DETAILS',
  GET_ITEM_FAILED = 'GET_ITEM_FAILED',
  SAVE_ITEM = 'SAVE_ITEM',
  SAVE_ITEM_FAILED = 'SAVE_ITEM_FAILED'
}

export type ItemActionTypes = 
| GetItemsAction 
| GetItemAction 
| GetItemFailed 
| SetItemAction 
| SetItemsAction 
| SaveItemAction 
| SaveItemFailedAction;

export interface GetItemsAction extends Action {
  type: TypeKeys.GET_ITEMS;
}

export interface GetItemAction extends Action {
  type: TypeKeys.GET_ITEM_DETAILS;
  itemId: number;
}

export interface GetItemFailed extends Action {
  type: TypeKeys.GET_ITEM_FAILED;
  error: string;
}

export interface SetItemsAction extends Action {
  type: TypeKeys.SET_ITEMS;
  payload: Item[];
}

export interface SetItemAction extends Action {
  type: TypeKeys.SET_ITEM_DETAILS;
  payload: Item;
}

export interface SaveItemAction extends Action {
  type: TypeKeys.SAVE_ITEM;
  payload: Item;
}

export interface SaveItemFailedAction extends Action {
  type: TypeKeys.SAVE_ITEM_FAILED;
  error: string;
}

export const getItemsAction = () => ({ type: TypeKeys.GET_ITEMS });
export const setItemsAction = (payload: Item[]) => ({ type: TypeKeys.SET_ITEMS, payload });

export const setItemAction = (payload: Item) => ({ type: TypeKeys.SET_ITEM_DETAILS, payload });
export const getItemAction = (itemId: number) => ({ type: TypeKeys.GET_ITEM_DETAILS, itemId });
export const getItemFailed = (error: string) => ({ type: TypeKeys.GET_ITEM_FAILED, error });

export const saveItemAction = (payload: Item) => ({ type: TypeKeys.SAVE_ITEM, payload });
export const saveItemFailedAction = (error: string) => ({ type: TypeKeys.SAVE_ITEM_FAILED, error });
