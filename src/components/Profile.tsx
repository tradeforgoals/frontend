import React, { Component } from 'react';

import UserSettingsform from './UserSettingsForm';
import { User } from '../user/UserState';
import { withUser, WithUserProps } from '../user/withUser';
import { Main, Layout, Sidebar } from '../styles/Layout';
import { Heading } from '../ui/Heading/Heading';

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
      <Layout>
        <Sidebar>
          <ul>
            <li>Profile</li>
            <li>Address</li>
            <li>Trade history</li>
          </ul>
        </Sidebar>
        <Main padding>
          <Heading level={1} >My Profile</Heading>
          <br />
          {this.state.userDetails && (
            <UserSettingsform
              handleFormSubmit={this.handleEditProfileSubmit}
              handleFormChange={this.handleFormChange}
              values={this.state.userDetails}
              error={null}
            />
          )}
        </Main>
      </Layout>
    );
  }
}

export default withUser(Profile);
