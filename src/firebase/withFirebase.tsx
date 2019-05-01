import React from 'react';
import { FirebaseContext } from './FirebaseContext';
import { Omit } from '../types/omit';

export type WithFirebaseProps = {
  firebaseInstance: firebase.app.App
};

export function withFirebase<T extends WithFirebaseProps>(Component: React.ComponentType<T>):
  React.ComponentType<Omit<T, keyof WithFirebaseProps>> {

  type WrappedComponentProps = WithFirebaseProps & T;
  class WrapperComponent extends React.Component<WrappedComponentProps> {
    public render() {
      return (
        <FirebaseContext.Consumer>
        {firebase => {
          return (<Component {...this.props} firebaseInstance={firebase} />);
        }}
      </FirebaseContext.Consumer>
      );
    }
  }

  // @ts-ignore non-understandable TS issue
  return WrapperComponent;
}