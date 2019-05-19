import React, { Component } from 'react';

import AddressForm from './AddressForm';
import { User } from '../../user/UserState';
import { withUser, WithUserProps } from '../../user/withUser';
import { Heading } from '../../ui/Heading/Heading';
import { Account } from '../Account';

interface StateProps {
  isLoggedIn: boolean;
}

interface AddressProps extends StateProps, WithUserProps { }

export interface AddressState {
  userDetails: Partial<User> | null;
}

class Address extends Component<AddressProps, AddressState> {
  public state: AddressState = {
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

  private handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        <Heading level={1} >My address</Heading>
        <br />
        {this.state.userDetails && (
          <AddressForm
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

export default withUser(Address);
