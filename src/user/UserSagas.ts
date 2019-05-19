import { all, fork, put, ForkEffect, takeEvery } from 'redux-saga/effects';
import { GetUserDetailsAction, TypeKeys, setUserDetailsAction, SaveUserDetailsAction } from './UserActions';
import { Api } from '../api/Api';
import { AdditionalUserData, User } from './UserState';

function* getAdditionalUserDetails(action: GetUserDetailsAction) {
  const api = new Api();

  try {
    const data: AdditionalUserData = yield api.getAdditionalUserDetails(action.user.uid);
    const combinedUserData: User = getCombinedUserData(action.user, data);

    yield put(setUserDetailsAction(combinedUserData));
  } catch (e) {
    console.log(e);
  }
}

function* saveUserDetails(action: SaveUserDetailsAction) {
  const api = new Api();

  try {
    yield api.saveUserDetails({
      id: action.user.uid,
      ...action.user
    });
  } catch (e) {
    console.log(e);
  }
}

function getCombinedUserData(fbUserData: User, additionalData: AdditionalUserData): User {
  return {
    ...{
      displayName: fbUserData.displayName,
      email: fbUserData.email,
      phoneNumber: fbUserData.phoneNumber,
      photoURL: fbUserData.photoURL,
      providerId: fbUserData.providerId,
      uid: fbUserData.uid
    },
    ...additionalData
  };
}

function* watchLoadUsers(): IterableIterator<ForkEffect> {
  yield takeEvery(TypeKeys.GET_USER_DETAILS, getAdditionalUserDetails);
  yield takeEvery(TypeKeys.SAVE_USER_DETAILS, saveUserDetails);
}

export function* userSagas() {
  yield all([
    fork(watchLoadUsers)
  ]);
}