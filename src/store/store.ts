import { Store, createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './RootState';
import createSagaMiddleware from '@redux-saga/core';
import { AllEffect, all, fork } from 'redux-saga/effects';
import { userSagas } from '../user/UserSagas';
import { itemSagas } from '../items/ItemSagas';
import { userReducer } from '../user/UserReducer';
import { itemReducer } from '../items/ItemReducer';

const rootReducer = combineReducers<RootState>({
  user: userReducer,
  items: itemReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];

function* rootSaga(): IterableIterator<AllEffect<{}>> {
  yield all([fork(userSagas), fork(itemSagas)]);
}

export function configureStore(): Store<RootState> {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  sagaMiddleWare.run(rootSaga);

  return store;
}
