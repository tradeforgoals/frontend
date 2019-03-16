import React from 'react';
import * as firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCSW1GYXAD8E0rOUtDK20ZK-gMuqdwzvd8',
  authDomain: 'tradeforgoals.firebaseapp.com',
  databaseURL: 'https://tradeforgoals.firebaseio.com',
  projectId: 'tradeforgoals',
  storageBucket: 'tradeforgoals.appspot.com',
  messagingSenderId: '53176817933'
});

export const FirebaseContext = React.createContext({} as firebase.app.App);

export class FirebaseProvider extends React.Component {
  public render() {
    return (
      <FirebaseContext.Provider value={firebaseApp}>{this.props.children}</FirebaseContext.Provider>
    );
  }
}