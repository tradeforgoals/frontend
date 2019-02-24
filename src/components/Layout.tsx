import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1em 0;
`;

interface HomeProps {
  isLoggedIn: boolean;
}

const Layout: React.SFC<HomeProps> = (props) => {
  const { children, isLoggedIn } = props;
  let navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );

  if (isLoggedIn) {
    navLinks = (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </>
    );
  }
  return (
    <>
      <Navigation>{navLinks}</Navigation>
      <div>{children}</div>
    </>
  );
};

export default Layout;
