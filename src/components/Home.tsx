import React from 'react';
import { withUser, WithUserProps } from '../user/withUser';

type HomeProps = WithUserProps;

const Home: React.SFC<HomeProps> = (props) => {
  const { user: { isLoggedIn, userDetails } } = props;

  return (
    <div>
      <h1>Welcome to Trade For Goals!</h1>
      <p>v0.2</p>
      <p>
        {isLoggedIn && userDetails ? <>Hi there {userDetails.displayName}</> : <>Not logged in</>}
      </p>
    </div>
  );
};

export default withUser(Home);
