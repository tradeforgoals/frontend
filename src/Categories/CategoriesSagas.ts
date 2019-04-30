import { all, fork, put, ForkEffect, takeEvery } from 'redux-saga/effects';
import { TypeKeys, GetCategoriesAction, setCategoriesAction } from './CategoriesActions';
import { Api } from '../api/Api';
import { Category } from './CategoriesState';

export function* getCategories(action: GetCategoriesAction) {
  const api = new Api();

  try {
    const data: Category[] = yield api.getCategories();

    yield put(setCategoriesAction(data));
  } catch (e) {
    console.log(e);
  }
}

function* watchLoadCategories(): IterableIterator<ForkEffect> {
  yield takeEvery(TypeKeys.GET_CATEGORIES, getCategories);
}

export function* categoriesSagas() {
  yield all([
    fork(watchLoadCategories)
  ]);
}