import React, { Component, Props } from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";

interface StateProps extends Props<any> {
  isLoggedIn: boolean;
  username: string | null;
  error: string | null;
}

class Profile extends Component<StateProps, any> {
  render() {
    const { username, isLoggedIn, error } = this.props;
    return (
      <div>
        <h1>My Profile</h1>
        <p>Logged in: {isLoggedIn ? "Yes" : "No"}</p>
        <p>User: {username}</p>
        {error && (
          <p>
            Error: <strong>{error}</strong>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username,
    error: state.user.error
  };
};

export default connect(mapStateToProps)(Profile);
