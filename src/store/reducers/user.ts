import * as actionTypes from '../actions/actionTypes';
interface Action {
  type: string;
  error: string | null;
  username: string | null; // TODO: Change to user object
}

export interface UserState {
  loading: boolean;
  isLoggedIn: boolean;
  username: string | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  isLoggedIn: false,
  username: 'Thomas',
  error: null
};

const fetchUserStart = (state: UserState, action: Action): UserState => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const fetchUserSuccess = (state: UserState, action: Action): UserState => {
  return {
    ...state,
    loading: false,
    isLoggedIn: true,
    username: action.username
  };
};

const fetchUserFail = (state: UserState, action: Action): UserState => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};

const registrationStart = (state: UserState, action: Action): UserState => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const reducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return fetchUserStart(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.LOGIN_FAILED:
      return fetchUserFail(state, action);
    case actionTypes.REGISTRATION_START:
      return registrationStart(state, action);
    case actionTypes.REGISTRATION_FAILED:
      // TODO: Make own function if login failed and registration failed become different
      return fetchUserFail(state, action);
    default:
      return state;
  }
};

export default reducer;
