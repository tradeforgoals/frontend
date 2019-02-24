import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './containers/Login';
import Register from './containers/Register';
import { RootState } from './store/sagas/RootState';

interface StateProps {
  isLoggedIn: boolean;
}

interface AppProps extends RouteComponentProps, StateProps { }

class App extends Component<AppProps> {
  public render(): JSX.Element {
    const { isLoggedIn } = this.props;

    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
    if (isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className="App">
        <Layout isLoggedIn={isLoggedIn}>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps)(App));
