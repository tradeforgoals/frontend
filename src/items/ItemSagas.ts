import { all, fork, put, ForkEffect, takeEvery } from 'redux-saga/effects';
import {
  GetItemAction,
  TypeKeys,
  setItemAction,
  getItemFailed,
} from './ItemActions';
import { Api } from '../api/Api';

export function* GetItemSagaAction(action: GetItemAction) {
  const api = new Api();

  try {
    const response = yield api.getItemById(action.itemId);
    yield put(setItemAction(response));
  } catch (e) {
    console.log(e);
    yield put(getItemFailed(e.message));
  }
}

function* watchItems(): IterableIterator<ForkEffect> {
  yield takeEvery(TypeKeys.GET_ITEM_DETAILS, GetItemSagaAction);
}

export function* itemSagas() {
  yield all([fork(watchItems)]);
}
