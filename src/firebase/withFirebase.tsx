import React from 'react';
import { FirebaseContext } from './FirebaseContext';

export type WithFirebaseProps = {
  firebaseInstance: firebase.app.App
};

export function withFirebase<T extends WithFirebaseProps>(Component: React.ComponentType<T>): any {
  return function WrapperComponent(props: any) {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return (<Component {...props} firebaseInstance={firebase} />);
        }}
      </FirebaseContext.Consumer>
    );
  };
}