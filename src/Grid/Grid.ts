import styled, { css } from 'styled-components/macro';
import { sizes } from '../styles/variables/sizes';

type GridItemProps = {
  size?: number;
  sizeS?: number;
  sizeM?: number;
  sizeL?: number;
  sizeXL?: number;
};

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 0;
  list-style: none;
  background: none;
  width: calc(100% + 30px);
  margin: 0 0 0 -30px;
`;

export const GridItem = styled.div<GridItemProps>`
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 0;
  padding: 0 0 30px 30px;
  width: 100%;

  ${props => props.size && css`
    width: ${100 / 12 * props.size}%;
  `}

  ${props => props.sizeS && css`
    @media (min-width: ${sizes.S}) {
      width: ${100 / 12 * props.sizeS}%;
    }
  `}

  ${props => props.sizeM && css`
    @media (min-width: ${sizes.M}) {
      width: ${100 / 12 * props.sizeM}%;
    }
  `}

  ${props => props.sizeL && css`
    @media (min-width: ${sizes.L}) {
      width: ${100 / 12 * props.sizeL}%;
    }
  `}

  ${props => props.sizeXL && css`
    @media (min-width: ${sizes.XL}) {
      width: ${100 / 12 * props.sizeXL}%;
    }
  `}
`;