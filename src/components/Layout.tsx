import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box, Grommet, Anchor } from 'grommet';
import RegisterLogin from '../user/RegisterLogin';
import Logout from '../user/Logout';

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
  }
};

interface HomeProps {
  isLoggedIn: boolean;
}

const Layout: React.SFC<HomeProps> = props => {
  const { children, isLoggedIn } = props;
  let navLinks = (
    <>
      <NavLink to="/">
        <Anchor as="span">Home</Anchor>
      </NavLink>
      {/* <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink> */}
    </>
  );

  if (isLoggedIn) {
    navLinks = (
      <>
        <NavLink to="/">
          <Anchor as="span">Home</Anchor>
        </NavLink>
        <NavLink to="/profile">
          <Anchor as="span">Profile</Anchor>
        </NavLink>
        <Logout>
          <Anchor as="span">Logout</Anchor>
        </Logout>
      </>
    );
  }
  return (
    <Grommet plain theme={customTheme}>
      <Box
        background="light-2"
        direction="row"
        justify="around"
        wrap
        pad="small"
      >
        {navLinks}
      </Box>
      <RegisterLogin />
      {children}
    </Grommet>
  );
};

export default Layout;
