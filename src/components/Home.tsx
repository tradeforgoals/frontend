import React from 'react';
import { Box, Heading } from 'grommet';
import { withUser, WithUserProps } from '../user/withUser';
import Card from '../items/Card';
import Items from '../items/Items';

type HomeProps = WithUserProps;

const Home: React.SFC<HomeProps> = props => {
  const {
    user: { isLoggedIn, userDetails }
  } = props;

  return (
    <Box>
      <h1>Welcome to Trade For Goals!</h1>
      <p>v0.2</p>
      <p>
        {isLoggedIn && userDetails
          ? `Hi there ${userDetails.displayName}`
          : 'Not logged in'}
      </p>
      <Heading level="2" alignSelf="center">
        Our top items:
      </Heading>
      <Items />
    </Box>
  );
};

export default withUser(Home);
