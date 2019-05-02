import styled from 'styled-components';
import { colors } from '../styles/variables/colors';
import { Button } from '../ui/Button/Button';
import { sizes } from '../styles/variables/sizes';

export const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  border: 2px solid ${colors.primary};
  border-radius: 3px;
  overflow: hidden;

  @media (min-width: ${sizes.M}) {
    margin-right: 40px;
  }
`;

export const SearchBarInput = styled.input`
  flex-grow: 1;
  padding: 0 10px;
  border: 0;
  -webkit-appearance: none;
`;

export const SearchBarButton = styled(Button)`
  flex-shrink: 0;
  background-color: ${colors.primary};
  color: #FFF;
  font-size: 20px;
`;