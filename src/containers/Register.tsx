import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../store/actions';
import UserSettingsform from '../components/UserSettingsForm';
import { RootState } from '../store/sagas/RootState';
import { Dispatch, Action } from 'redux';
import { RegisterUserPayload } from '../store/actions/user';

interface StateProps {
  isLoggedIn: boolean;
  error: string | null;
}

interface DispatchProps {
  onUserRegister: (user: RegisterUserPayload) => void;
}

interface RegisterProps extends StateProps, DispatchProps { }
interface RegisterState extends RegisterUserPayload { }

class Register extends Component<RegisterProps, RegisterState> {
  public state = {
    username: '',
    firstname: '',
    lastname: '',
    city: '',
    email: '',
    password: '',
    password_confirm: ''
  };

  private handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof RegisterState;

    // @ts-ignore TS bug: https://github.com/Microsoft/TypeScript/issues/13948
    this.setState({
      [fieldName]: e.target.value
    });
  }

  private handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { email, password } = this.state;
    const { onUserRegister } = this.props;
    onUserRegister(this.state);
  }

  public render() {
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

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    error: state.user.error
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onUserRegister: (payload: RegisterUserPayload) => dispatch(actions.registerUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
