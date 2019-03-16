import React from 'react';
import firebaseui from 'firebaseui';
import { withFirebase, WithFirebaseProps } from '../firebase/withFirebase';
import { withUser, WithUserProps } from './withUser';

type RegisterAccountAllProps = WithFirebaseProps & WithUserProps;

class Logout extends React.Component<RegisterAccountAllProps> {
  public render() {
    return (
      <span onClick={this.logOut}>{this.props.children}</span>
    );
  }

  private logOut = () => {
    const { firebaseInstance } = this.props;

    firebaseInstance.auth().signOut()
      .then(() => {
        const ui = firebaseui.auth.AuthUI.getInstance();
        if (ui) {
          ui.delete();
        }

        this.props.clearUserDetails();
      });
  }
}

export default withFirebase(withUser(Logout));