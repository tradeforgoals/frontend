import React from 'react';
import { Box } from 'grommet';
import { withUser, WithUserProps } from '../user/withUser';
import Items from '../items/Items';
import Categories from '../Categories/Categories';
import { Sidebar, Main, Layout } from '../styles/Layout';

type HomeProps = WithUserProps;

const Home: React.SFC<HomeProps> = props => {
  return (
    <Layout>
      <Sidebar>
        <Categories />
      </Sidebar>
      <Main>
        <Items />
      </Main>
    </Layout>
  );
};

export default withUser(Home);
