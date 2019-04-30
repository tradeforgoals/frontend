import { all, fork, put, ForkEffect, takeEvery } from 'redux-saga/effects';
import { GetUserDetailsAction, TypeKeys, setUserDetailsAction } from './UserActions';
import { Api } from '../api/Api';

export function* getAdditionalUserDetails(action: GetUserDetailsAction) {
  const api = new Api();

  try {
    const data: any = yield api.getAdditionalUserDetails(action.userId);

    yield put(setUserDetailsAction(data));
  } catch (e) {
    console.log(e);
  }
}

function* watchLoadUsers(): IterableIterator<ForkEffect> {
  yield takeEvery(TypeKeys.GET_USER_DETAILS, getAdditionalUserDetails);
}

export function* userSagas() {
  yield all([
    fork(watchLoadUsers)
  ]);
}