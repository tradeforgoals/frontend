import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './Account/Profile/Profile';
import Item from './items/Item';
import { RootState } from './store/RootState';
import Address from './Account/Address/Address';
import TradeForm from './TradeProduct/TradeForm';
import CurrentItems from './Account/Items/CurrentItems';
import StartTradeForm from './Trade/StartTradeForm';
import AcceptTradeForm from './Trade/AcceptTradeForm';
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
          <Route path="/account/items" component={CurrentItems} />
          <Route path="/items/:id" component={Item} />
          <Route path="/trade/add" component={TradeForm} />
          <Route path="/trade/start/:itemId" component={StartTradeForm} />
          <Route path="/trade/accept/:itemId/" component={AcceptTradeForm} />
          <Route path="/" exact component={Home} />
        </Switch>
      );
    }
    return (
      <div className="App">
        <Layout isLoggedIn={isLoggedIn}>{routes}</Layout>
        <ToastContainer />
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
