import styled from 'styled-components';
import { sizes } from './variables/sizes';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;

  @media (min-width: ${sizes.M}) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.aside`
  margin-bottom: 20px;

  @media (min-width: ${sizes.M}) {
    flex-shrink: 0;
    width: 200px;
  }
`;

export const Main = styled.main`
`;
