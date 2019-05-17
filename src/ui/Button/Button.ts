import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../styles/variables/colors';

interface ButtonProps {
  readonly primary?: boolean;
  readonly rounded?: boolean;
  readonly larger?: boolean;
  readonly inHeader?: boolean;
}

export const Button = styled.a<ButtonProps>`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  padding: 10px 20px;
  border: 0;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
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

  ${props => props.larger && css`
    padding: 10px 25px;
    font-size: 18px;
  `}

  ${props => props.inHeader && css`
    margin-left: auto;
  `}
`;

export const ButtonIcon = styled.div`
  padding-right: 5px;
  font-size: 20px;

  & > svg {
    display: block;
  }
`;