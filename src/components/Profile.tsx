import React, { Component, Props } from "react";
import { connect } from "react-redux";

import UserSettingsform from "./UserSettingsForm";
import { RootState } from "../store/sagas/RootState";

interface StateProps {
  isLoggedIn: boolean;
  username: string | null;
}

interface ProfileProps extends StateProps {}

export interface ProfileState {
  username: string | null;
  firstname: string;
  lastname: string;
  city: string;
  email: string;
  password: string;
  password_confirm: string;
}

class Profile extends Component<ProfileProps, ProfileState> {
  public state: ProfileState = {
    username: "",
    firstname: "",
    lastname: "",
    city: "",
    email: "",
    password: "",
    password_confirm: ""
  };

  public componentDidMount() {
    const { username } = this.props;

    this.setState({
      username
    });
  }

  private handleEditProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Updating user");
  }

  private handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof ProfileState;

    // @ts-ignore TS bug: https://github.com/Microsoft/TypeScript/issues/13948
    this.setState({
      [fieldName]: e.target.value
    });
  }

  public render() {
    return (
      <div>
        <h1>My Profile</h1>
        <UserSettingsform
          handleFormSubmit={this.handleEditProfileSubmit}
          handleFormChange={this.handleFormChange}
          values={this.state}
          error="TODO"
        />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

export default connect(mapStateToProps)(Profile);
