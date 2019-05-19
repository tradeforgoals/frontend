import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './Account/Profile/Profile';
import Item from './items/Item';
import { RootState } from './store/RootState';
import Address from './Account/Address/Address';
import { Trade } from './Trade/Trade';
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
        <Route path="/items/:id" component={Item} />
      </Switch>
    );
    if (isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/account/profile" component={Profile} />
          <Route path="/account/address" component={Address} />
          <Route path="/items/:id" component={Item} />
          <Route path="/trade/add" component={Trade} />
          <Route path="/" exact component={Home} />
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
