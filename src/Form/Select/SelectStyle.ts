import styled, { css } from 'styled-components/macro';
import { colors } from '../../styles/variables/colors';

type SelectInnerProps = {
  hasValue: boolean;
};

export const SelectContainer = styled.div`
    font-size: 18px;
    flex-grow: 1;
    width: 100%;
`;

export const SelectInner = styled.div<SelectInnerProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: .476em 0 .381em;
    border-bottom: 1px solid #000;

    ${props => props.hasValue && css`
        select ~ label {
          transform: scale(1) translateY(0);
          width: auto;
        }
    `}
`;

export const StyledSelect = styled.select`
    height: 1.190em;
    color: ${colors.shade2};
    font-size: inherit;
    font-weight: 500;
    order: 2;
    border: 0;

    &::-ms-clear {
        display: none;
    }

    &:disabled {
        background-color: #FFF;
        font-weight: normal;
        opacity: .6;
        cursor: not-allowed;
    }

    &:not(:disabled) {
    &:focus, &:active, &[placeholder] {
            outline: 0;

            ~ label {
                transform: none;
            }
        }
    }
`;

export const SelectLabel = styled.label`
    color: ${colors.shade1};
    font-size: .667em;
    transform: scale(1.5) translateY(1em);
    width: 50%;
    transform-origin: top left;
    transition: .2s ease;
    order: 1;
    pointer-events: none;
    margin-bottom: 5px;
`;