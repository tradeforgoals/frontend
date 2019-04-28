import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { colors } from './variables/colors';

interface ButtonProps {
  readonly primary?: boolean;
  readonly rounded?: boolean;
  readonly inHeader?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: 0;
  font-weight: bold;
  text-align: center;
	cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  ${props => props.primary && css`
    background: ${colors.primary};
    color: #FFF;

    &:hover {
      background-color: ${darken(.05, colors.primary)};
      color: #FFF;
    }
  `}

  ${props => props.rounded && css`
    border-radius: 100px;
  `}

  ${props => props.inHeader && css`
    margin-left: auto;
  `}
`;
