import { Item } from './Items';
import { TypeKeys, ItemActionTypes, SetItemAction } from './ItemActions';

export interface ItemState {
  readonly loading: boolean;
  readonly error: string | null;
  readonly items: Item[];
}

const initialState: ItemState = {
  loading: false,
  error: null,
  items: [],
};

const setItem = (state: ItemState, action: SetItemAction): ItemState => {
  const newItems = [...state.items];
  newItems[action.payload.id] = action.payload;
  return {
    ...state,
    loading: false,
    error: null,
    items: newItems,
  };
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
    case TypeKeys.SET_ITEM_DETAILS:
      return setItem(state, action);
    default:
      return state;
  }
}
