import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavigationItem = styled(NavLink)`
  padding: 5px 0;
  color: #333;

  &.${(props) => props.activeClassName} {
    &:before {
      content: '> ';
    }
  }
`;