import { all, fork, put, ForkEffect, takeEvery } from 'redux-saga/effects';
import {
  GetItemAction,
  TypeKeys,
  setItemAction,
  getItemFailed,
} from './ItemActions';
import axios from '../axios';

export function* GetItemSagaAction(action: GetItemAction) {
  try {
    const response = yield axios.get(`/items/${action.itemId}`);
    yield put(setItemAction(response.data));
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
