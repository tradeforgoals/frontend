import styled, { css } from 'styled-components/macro';
import { colors } from '../../styles/variables/colors';

type TextInputInnerProps = {
  hasValue: boolean;
};

export const TextInputContainer = styled.div`
    font-size: 18px;
    flex-grow: 1;
    width: 100%;
`;

export const TextInputInner = styled.div<TextInputInnerProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: .476em 0 .381em;
    border-bottom: 1px solid #000;

    ${props => props.hasValue && css`
        input ~ label {
          transform: scale(1) translateY(0);
          width: auto;
        }
    `}
`;

export const StyledTextInput = styled.input`
    height: 1.190em;
    -webkit-appearance: none;
    color: ${colors.shade2};
    font-size: inherit;
    font-weight: 500;
    order: 2;
    border: 0;

    &::-ms-clear {
        display: none;
    }

    &:disabled, &:read-only {
        background-color: #FFF;
        font-weight: normal;
        opacity: .6;
        cursor: not-allowed;
    }

    &:not(:disabled):not(:read-only) {
    &:focus, &:active, &[placeholder] {
            outline: 0;

            ~ label {
                transform: none;
            }
        }
    }
`;

export const TextInputLabel = styled.label`
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