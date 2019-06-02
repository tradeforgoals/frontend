import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseProvider } from './firebase/FirebaseContext';
import { configureStore } from './store/store';
import history from './store/history';
import { Normalize } from 'styled-normalize';

import './index.css';

const app = (
  <Provider store={configureStore()}>
    <FirebaseProvider>
      <Router history={history}>
        <>
          <Normalize />
          <App />
        </>
      </Router>
    </FirebaseProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
