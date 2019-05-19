import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import {
  setUserDetailsAction,
  getUserDetailsAction,
  clearUserDetailsAction,
  saveUserDetailsAction
} from './UserActions';
import { RootState } from '../store/RootState';
import { User, UserState } from './UserState';
import { Omit } from '../types/omit';

interface StateProps {
  user: UserState;
}

interface DispatchProps {
  setUserDetails: (user: User) => void;
  clearUserDetails: () => void;
  getUserData: (user: User) => void;
  saveUserData: (user: User) => void;
}

export interface WithUserProps extends StateProps, DispatchProps { }

export function withUser<T extends WithUserProps>(Component: React.ComponentType<T>):
  React.ComponentType<Omit<T, keyof WithUserProps>> {

  type WrappedComponentProps = WithUserProps & T;
  class WrapperComponent extends React.Component<WrappedComponentProps> {
    public render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = (state: RootState): StateProps => {
    return {
      user: state.user
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return {
      setUserDetails: (payload: User) => dispatch(setUserDetailsAction(payload)),
      clearUserDetails: () => dispatch(clearUserDetailsAction()),
      getUserData: (user: User) => dispatch(getUserDetailsAction(user)),
      saveUserData: (user: User) => dispatch(saveUserDetailsAction(user))
    };
  };

  // @ts-ignore non-understandable TS issue
  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
}
