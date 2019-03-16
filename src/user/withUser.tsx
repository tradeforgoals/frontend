import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { setUserDetailsAction, getUserDetailsAction, clearUserDetailsAction } from './UserActions';
import { RootState } from '../store/RootState';
import { User, UserState } from './UserState';

interface WithUserCustomProps {
  getAdditionalUserData(userId: string): void;
}

interface StateProps {
  user: UserState;
}

interface DispatchProps {
  setUserDetails: (payload: User) => void;
  clearUserDetails: () => void;
  getAdditionalUserData: (userId: string) => void;
}

export interface WithUserProps extends WithUserCustomProps, StateProps, DispatchProps { }

export function withUser(Component: any): any {

  type WrappedComponentProps = WithUserProps;
  class WrapperComponent extends React.Component<WrappedComponentProps> {
    public render() {
      return (
        <Component {...this.props} getAdditionalUserData={this.getAdditionalUserData} />
      );
    }

    private getAdditionalUserData = (userId: string): void => {
      this.props.getAdditionalUserData(userId);
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
      getAdditionalUserData: (userId: string) => dispatch(getUserDetailsAction(userId))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
}
