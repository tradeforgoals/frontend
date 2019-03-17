import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import { RootState } from './store/RootState';
// import Register from './containers/Register';

interface StateProps {
  isLoggedIn: boolean;
}

interface AppProps extends RouteComponentProps, StateProps {}

class App extends Component<AppProps> {
  public render(): JSX.Element {
    const { isLoggedIn } = this.props;

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Home} />
      </Switch>
    );
    if (isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route component={Home} />
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
