import styled from 'styled-components';
import { colors } from './variables/colors';
import { sizes } from './variables/sizes';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
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
