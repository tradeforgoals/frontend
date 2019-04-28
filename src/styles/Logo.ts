import styled from 'styled-components';
import { colors } from './variables/colors';
import { sizes } from './variables/sizes';

export const Logo = styled.a`
  display: block;
  margin-right: 20px;
  font-size: 20px;
  color: ${colors.primary};

  &:hover {
    text-decoration: none;
    color: ${colors.primary};
  }

  @media (min-width: ${sizes.M}) {
    margin-right: 40px;
  }
`;
