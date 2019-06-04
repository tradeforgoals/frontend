import styled, { css } from 'styled-components/macro';

type AlertProps = {
  type: 'warning' | 'success' | 'error'
};

export const Alert = styled.div<AlertProps>`
  position: relative;
  padding: 12px 20px;
  margin: 15px 0;
  border: 1px solid #0000;
  border-radius: 4px;

  ${props => props.type === 'warning' && css`
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}

  ${props => props.type === 'success' && css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `}

  ${props => props.type === 'error' && css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`;