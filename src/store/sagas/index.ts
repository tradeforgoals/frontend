import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { userLoginSaga, userRegistrationSaga } from "./user";

export function* watchUser() {
  yield all([takeEvery(actionTypes.LOGIN_USER, userLoginSaga)]);
  yield all([takeEvery(actionTypes.REGISTER_USER, userRegistrationSaga)]);
}
