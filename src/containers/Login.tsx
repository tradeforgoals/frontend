import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../store/actions";
import { StyledLabel } from "../styles/Form";
import { RootState } from "../store/sagas/RootState";
import { Action, Dispatch } from "redux";
import { LoginUserPayload } from "../store/actions/user";
interface StateProps {
  isLoggedIn: boolean;
  error: string | null;
}

interface DispatchProps {
  onUserLogin: (user: LoginUserPayload) => void;
}

interface LoginProps extends StateProps, DispatchProps {}

interface LoginState {
  email: string;
  password: string;
}

class Login extends Component<LoginProps, LoginState> {
  public state: LoginState = {
    email: "",
    password: ""
  };

  private handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof LoginState;

    // @ts-ignore TS bug: https://github.com/Microsoft/TypeScript/issues/13948
    this.setState({
      [fieldName]: e.target.value
    });
  }

  private handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onUserLogin } = this.props;
    onUserLogin({ email, password });
  }

  public render() {
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

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    error: state.user.error
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onUserLogin: (payload: LoginUserPayload) => dispatch(actions.loginUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
