import { CategoriesActionTypes, TypeKeys } from './CategoriesActions';
import { CategoriesState } from './CategoriesState';

const initialState: CategoriesState = {
  loading: false,
  data: [],
  error: null
};

export function categoriesReducer(
  state: CategoriesState = initialState,
  action: CategoriesActionTypes
): CategoriesState {

  switch (action.type) {
    case TypeKeys.GET_CATEGORIES:
      return { ...state, loading: true };
    case TypeKeys.SET_CATEGORIES:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
}