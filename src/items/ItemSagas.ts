import { all, fork, put, ForkEffect, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  GetItemAction,
  TypeKeys,
  setItemAction,
  getItemFailed,
  SaveItemAction,
  saveItemFailedAction,
  setItemsAction,
} from './ItemActions';
import { Api } from '../api/Api';
import history from '../store/history';

export function* GetItemsSagaAction() {
  const api = new Api();

  try {
    const response = yield api.getItems();
    yield put(setItemsAction(response || []));
  } catch (e) {
    console.log(e);
    yield put(getItemFailed(e.message));
  }
}

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

function* SaveItemSagaAction(action: SaveItemAction) {
  const api = new Api();

  try {
    yield api.saveItem(action.payload);
    toast.success('Item saved succesfully!', { position: toast.POSITION.BOTTOM_RIGHT });
    history.push('/');
  } catch (e) {
    console.log(e);
    yield put(saveItemFailedAction(e.message));
  }
}

function* watchItems(): IterableIterator<ForkEffect> {
  yield takeEvery(TypeKeys.GET_ITEMS, GetItemsSagaAction);
  yield takeEvery(TypeKeys.GET_ITEM_DETAILS, GetItemSagaAction);
  yield takeEvery(TypeKeys.SAVE_ITEM, SaveItemSagaAction);
}

export function* itemSagas() {
  yield all([fork(watchItems)]);
}
