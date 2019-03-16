import React from 'react';
import firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import { withFirebase, WithFirebaseProps } from '../firebase/withFirebase';
import { withUser, WithUserProps } from './withUser';

type RegisterAccountAllProps = WithFirebaseProps & WithUserProps;

class RegisterAccount extends React.Component<RegisterAccountAllProps> {
  public componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUserDetails(user);
        this.props.getAdditionalUserData(user.uid);
      } else {
        setTimeout(() => {
          this.showLoginOptions();
        });
      }
    });
  }

  public componentDidUpdate(prevProps: RegisterAccountAllProps) {
    const userDetailsHaveBeenCleared = prevProps.user.userDetails && !this.props.user.userDetails;

    if (userDetailsHaveBeenCleared) {
      // this.showLoginOptions();
    }
  }

  public render() {
    return (<div id="authenticate" />);
  }

  private showLoginOptions() {
    const { firebaseInstance } = this.props;
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebaseInstance.auth());

    ui.start('#authenticate', {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          // This user id should go in the DB
          console.log(authResult.user.uid);

          return false;
        }
      },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    });
  }
}

export default withFirebase(withUser(RegisterAccount));