import React, { ReactNode } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1em 0;
`;

interface Props {
  children: ReactNode | null;
}

const home = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navigation>
      <div>{children}</div>
    </>
  );
};

export default home;
