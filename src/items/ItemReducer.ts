import { Item } from './Items';
import { TypeKeys, ItemActionTypes } from './ItemActions';

export interface ItemState {
  readonly loading: boolean;
  readonly error: string | null;
  readonly saveError: string | null;
  readonly items: Item[];
  readonly item: Item | null;
}

const initialState: ItemState = {
  loading: false,
  error: null,
  saveError: null,
  items: [],
  item: null
};

export function itemReducer(
  state: ItemState = initialState,
  action: ItemActionTypes
): ItemState {
  switch (action.type) {
    case TypeKeys.GET_ITEM_DETAILS:
      return { ...state, loading: true, error: null };
    case TypeKeys.GET_ITEM_FAILED:
      return { ...state, loading: false, error: action.error };
    case TypeKeys.GET_ITEMS:
      return { ...state, loading: true, error: null };
    case TypeKeys.SET_ITEMS:
      return { ...state, loading: false, error: null, items: action.payload };
    case TypeKeys.SET_ITEM_DETAILS:
      return { ...state, loading: false, error: null, item: action.payload };
    case TypeKeys.SAVE_ITEM_FAILED:
      return { ...state, loading: false, saveError: action.error };
    default:
      return state;
  }
}
