import React, { Component, Props } from "react";
import { connect } from "react-redux";

import UserSettingsform from "./UserSettingsForm";
interface StateProps extends Props<any> {
  isLoggedIn: boolean;
  username: string | null;
}

class Profile extends Component<StateProps, any> {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    city: "",
    email: "",
    password: "",
    password_confirm: ""
  };

  componentDidMount() {
    const { username } = this.props;
    this.setState({
      username
    });
  }

  handleEditProfileSubmit = (e: any) => {
    e.preventDefault();
    console.log("Updating user");
  };

  private handleFormChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
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

const mapStateToProps = (state: any): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

export default connect(mapStateToProps)(Profile);
