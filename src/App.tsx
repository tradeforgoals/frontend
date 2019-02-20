import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./containers/Login";
import Register from "./containers/Register";

interface StateProps {
  isLoggedIn: false;
}

class App extends Component<RouteComponentProps & StateProps, any> {
  render() {
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

const mapStateToProps = (state: any): StateProps => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps)(App));
