import React, { Component, Props } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../store/actions";
import UserSettingsform from "../components/UserSettingsForm";

interface StateProps extends Props<any> {
  isLoggedIn: false;
  error: string | null;
}

interface DispatchProps extends Props<any> {
  onUserRegister: any;
}

class Register extends Component<StateProps & DispatchProps, any> {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    city: "",
    email: "",
    password: "",
    password_confirm: ""
  };

  private handleFormChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  private handleRegisterSubmit = (e: any) => {
    e.preventDefault();
    // const { email, password } = this.state;
    const { onUserRegister } = this.props;
    onUserRegister(this.state);
  };

  render() {
    const { error, isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Register</h1>
        <UserSettingsform
          handleFormSubmit={this.handleRegisterSubmit}
          handleFormChange={this.handleFormChange}
          values={this.state}
          error={error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    error: state.user.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUserRegister: (payload: any) => dispatch(actions.registerUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
