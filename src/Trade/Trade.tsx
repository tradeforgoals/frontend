import React from 'react';
import { Main, Layout } from '../styles/Layout';
import TradeForm from './TradeForm';
import { Heading } from '../ui/Heading/Heading';

export const Trade: React.FC = (props) => {
  return (
    <Layout>
      <Main padding>
        <Heading level={1}>Add product</Heading>
        <TradeForm
            values={{}}
            error={null}
          />
      </Main>
    </Layout>
  );
};