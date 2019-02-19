import React, { Component, Props } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../store/actions";
import { StyledLabel } from "../styles/Form";
interface StateProps extends Props<any> {
  isLoggedIn: boolean;
  error: string | null;
}

interface DispatchProps extends Props<any> {
  onUserLogin: any;
}

class Login extends Component<StateProps & DispatchProps, any> {
  state = {
    email: "",
    password: ""
  };

  private handleFormChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  private handleLoginSubmit = (e: any) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onUserLogin } = this.props;
    onUserLogin({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { error, isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLoginSubmit}>
          <StyledLabel htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              value={email}
              onChange={this.handleFormChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              value={password}
              onChange={this.handleFormChange}
            />
          </StyledLabel>
          <button type="submit">Login</button>
        </form>
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
    error: state.user.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUserLogin: (payload: any) => dispatch(actions.loginUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
