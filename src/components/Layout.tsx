import React from 'react';
import { Grommet, Anchor } from 'grommet';
import Header from '../ui/Header/Header';

const customTheme = {
  global: {
    colors: {
      brand: 'lightskyblue'
    }
  },
  button: {
    border: {
      radius: 0
    }
  },
  box: {
    extend: `max-width: 1240px; margin-left: auto; margin-right: auto;`
  }
};

interface HomeProps {
  isLoggedIn: boolean;
}

const Layout: React.SFC<HomeProps> = props => {
  const { children, isLoggedIn } = props;

  return (
    <Grommet plain theme={customTheme}>
      <Header isLoggedIn={isLoggedIn} />

      {children}
    </Grommet>
  );
};

export default Layout;
