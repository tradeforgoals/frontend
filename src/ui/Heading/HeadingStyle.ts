import styled, { css } from 'styled-components';
import { sizes } from '../../styles/variables/sizes';
import { HeadingProps } from './Heading';

export const StyledHeading = styled.h1<HeadingProps>`
  font-size: 26px;
  font-weight: 500;

  @media (min-width: ${sizes.M}) {
    font-size: 36px;
  }

  ${props => props.level === 2 && css`
    font-size: 24px;
    font-weight: 500;

    @media (min-width: ${sizes.M}) {
      font-size: 34px;
    }
  `}

  ${props => props.level === 3 && css`
    font-size: 22px;
    font-weight: 500;

    @media (min-width: ${sizes.M}) {
      font-size: 22px;
    }
  `}
  
  ${props => props.level === 4 && css`
    font-size: 20px;
    font-weight: 500;

    @media (min-width: ${sizes.M}) {
      font-size: 30px;
    }
  `}

  ${props => props.level === 5 && css`
    font-size: 16px;
    font-weight: 500;

    @media (min-width: ${sizes.M}) {
      font-size: 26px;
    }
  `}

  ${props => props.level === 6 && css`
    font-size: 14px;
    font-weight: 500;

    @media (min-width: ${sizes.M}) {
      font-size: 24px;
    }
  `}
`;