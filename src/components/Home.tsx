import React from 'react';
import { withUser, WithUserProps } from '../user/withUser';
import Items from '../items/Items';
import Categories from '../Categories/Categories';
import { Sidebar, Main, Layout, LayoutHeading, MainContent } from '../styles/Layout';

type HomeProps = WithUserProps;

const Home: React.SFC<HomeProps> = props => {
  return (
    <Layout>
      <Sidebar>
        <LayoutHeading>Categories</LayoutHeading>
        <Categories />
      </Sidebar>
      <Main>
        <LayoutHeading>Popular products</LayoutHeading>
        <MainContent>
        <Items />
        </MainContent>
      </Main>
    </Layout>
  );
};

export default withUser(Home);
