import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./containers/Login";
import Register from "./containers/Register";

const routes = (
  <Switch>
    <Route path="/profile" component={Profile} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
