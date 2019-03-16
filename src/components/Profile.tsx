import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserSettingsform from './UserSettingsForm';
import { User } from '../user/UserState';
import { RootState } from '../store/RootState';
import { withUser, WithUserProps } from '../user/withUser';

interface StateProps {
  isLoggedIn: boolean;
}

interface ProfileProps extends StateProps, WithUserProps { }

export interface ProfileState {
  userDetails: Partial<User> | null;
}

class Profile extends Component<ProfileProps, ProfileState> {
  public state: ProfileState = {
    userDetails: this.props.user.userDetails
  };

  public componentDidMount() {
    const { user: { userDetails } } = this.props;

    this.setState({
      userDetails
    });
  }

  private handleEditProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Updating user');
  }

  private handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof Partial<User>;

    // @ts-ignore TS bug: https://github.com/Microsoft/TypeScript/issues/13948
    this.setState({
      [fieldName]: e.target.value
    });
  }

  public render() {
    return (
      <div>
        <h1>My Profile</h1>
        {this.state.userDetails &&
          <UserSettingsform
            handleFormSubmit={this.handleEditProfileSubmit}
            handleFormChange={this.handleFormChange}
            values={this.state.userDetails}
            error="TODO"
          />
        }
      </div>
    );
  }
}

export default withUser(Profile);
