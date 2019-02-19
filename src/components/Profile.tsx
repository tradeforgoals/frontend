import React, { Component, Props } from "react";
import { connect } from "react-redux";

interface StateProps extends Props<any> {
  isLoggedIn: boolean;
  username: string | null;
}

class Profile extends Component<StateProps, any> {
  render() {
    const { username, isLoggedIn } = this.props;
    return (
      <div>
        <h1>My Profile</h1>
        <p>Logged in: {isLoggedIn ? "Yes" : "No"}</p>
        <p>User: {username}</p>
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
