import React from 'react';

import { Main, Layout, Sidebar } from '../styles/Layout';
import { Navigation } from '../Navigation/Navigation';
import { NavigationItem } from '../Navigation/NavigationStyle';

export const Account: React.FC = (props) => {
  return (
    <Layout>
        <Sidebar>
          <Navigation>
            <NavigationItem activeClassName="active" to="/account/profile" >Profile</NavigationItem>
            <NavigationItem activeClassName="active" to="/account/address">Address</NavigationItem>
            <NavigationItem activeClassName="active" to="/account/trade-history">Trade history</NavigationItem>
          </Navigation>
        </Sidebar>
        <Main padding>
          {props.children}
        </Main>
      </Layout>
  );
};