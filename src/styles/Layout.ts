import styled from 'styled-components/macro';
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
  background-color: #FFF;
  border-right: 1px solid #e9e9e9;

  @media (min-width: ${sizes.M}) {
    flex-shrink: 0;
    width: 200px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  background-color: #FFF;
`;

export const MainContent = styled.div`
  padding: 10px;
`;

export const LayoutHeading = styled.div`
  background-color: #F9F3EF;
  text-transform: uppercase;
  font-weight: 500;
  padding: 12px;

  @media (min-width: ${sizes.M}) {
    padding-left: 24px;
  }
`;