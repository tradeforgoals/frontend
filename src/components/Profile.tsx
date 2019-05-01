import React, { Component } from 'react';

import UserSettingsform from './UserSettingsForm';
import { User } from '../user/UserState';
import { withUser, WithUserProps } from '../user/withUser';
import { Box, Heading } from 'grommet';

interface StateProps {
  isLoggedIn: boolean;
}

interface ProfileProps extends StateProps, WithUserProps {}

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
      <Box direction="column" align="center">
        <Heading level="1">My Profile</Heading>
        <Box width="medium">
          {this.state.userDetails && (
            <UserSettingsform
              handleFormSubmit={this.handleEditProfileSubmit}
              handleFormChange={this.handleFormChange}
              values={this.state.userDetails}
              error={null}
            />
          )}
        </Box>
      </Box>
    );
  }
}

export default withUser(Profile);
