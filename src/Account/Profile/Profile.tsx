import React, { Component } from 'react';

import UserSettingsform from './UserSettingsForm';
import { User } from '../../user/UserState';
import { withUser, WithUserProps } from '../../user/withUser';
import { Heading } from '../../ui/Heading/Heading';
import { Account } from '../Account';

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
    const {
      user: { userDetails }
    } = this.props;

    this.setState({
      userDetails
    });
  }

  private handleEditProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.saveUserData(this.state.userDetails as User);
  }

  private handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof Partial<User>;

    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [fieldName]: e.target.value
      }
    });
  }

  public render() {
    return (
      <Account>
        <Heading level={1} >My profile</Heading>
        <br />
        {this.state.userDetails && (
          <UserSettingsform
            handleFormSubmit={this.handleEditProfileSubmit}
            handleFormChange={this.handleFormChange}
            values={this.state.userDetails}
            error={null}
          />
        )}
      </Account>
    );
  }
}

export default withUser(Profile);
