import { put, call } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";

export function* userLoginSaga(action: any) {
  yield put(actions.loginStart());
  const loginData = {
    email: action.email,
    password: action.password
  };

  const url = "/api/user/login";
  try {
    const response = yield axios.post(url, loginData);
    yield put(action.loginSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(actions.loginFailed(error.message));
  }
}
