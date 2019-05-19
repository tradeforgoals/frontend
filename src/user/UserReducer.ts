import { UserState } from './UserState';
import { UserActionTypes, TypeKeys } from './UserActions';

const initialState: UserState = {
  loading: false,
  isLoggedIn: false,
  userDetails: null,
  error: null
};

export function userReducer(state: UserState = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case TypeKeys.GET_USER_DETAILS:
      return { ...state, loading: true };
    case TypeKeys.CLEAR_USER_DETAILS:
      return { ...state, userDetails: null, isLoggedIn: false };
    case TypeKeys.SET_USER_DETAILS:
      return { ...state, userDetails: { ...state.userDetails, ...action.user }, isLoggedIn: true, loading: false };
    default:
      return state;
  }
}