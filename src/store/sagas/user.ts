import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';
import { LoginUserAction, RegisterUserAction } from '../actions/user';

export function* userLoginSaga(action: LoginUserAction) {
  console.log(action);
  yield put(actions.loginStart());
  const loginData = {
    email: action.payload.email,
    password: action.payload.password
  };

  const url = '/api/user/login';
  try {
    const response = yield axios.post(url, loginData);
    yield put(actions.loginSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(actions.loginFailed(error.message));
  }
}

export function* userRegistrationSaga(action: RegisterUserAction) {
  yield put(actions.registrationStart());
  const url = '/api/user';
  try {
    const response = yield axios.put(url, action.payload);
    yield put(actions.registrationSuccess(response.data));
    const user = {
      ...response.data.user
    };
    yield put(actions.loginSuccess(user)); // assume we got the user back
  } catch (error) {
    yield put(actions.registrationFailed(error.message));
  }
}
