import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { userLoginSaga } from "./user";

export function* watchUser() {
  yield all([takeEvery(actionTypes.LOGIN_USER, userLoginSaga)]);
}
