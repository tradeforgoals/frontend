import styled from 'styled-components/macro';
import { sizes } from '../../styles/variables/sizes';

export const MasonryItem = styled.div`
  padding-bottom: 10px;

  @media (min-width: ${sizes.S}) {
    width: 50%;
    padding: 5px;
  }

  @media (min-width: ${sizes.M}) {
    padding: 10px;
  }

  @media (min-width: ${sizes.L}) {
    width: 33.3333%;
  }
`;