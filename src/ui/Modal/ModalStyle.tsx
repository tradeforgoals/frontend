import styled, { css } from 'styled-components';
import { sizes } from '../../styles/variables/sizes';
import { zIndex } from '../../styles/variables/zIndex';
import { rgba } from 'polished';

interface StyledModalProps {
  open: boolean;
}

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  background-color: ${rgba('#FFF', .5)};
  transition: .3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  z-index: ${zIndex.modal};

  &:focus {
    outline: 0;
  }

  ${props => props.open && css`
    overflow-y: scroll;
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  `}
`;

export const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFF;

    @media (min-width: ${sizes.S}) {
      top: 35px;
      left: 50%;
      min-height: auto;
      width: 90%;
      max-width: 1024px;
      transform: translateX(-50%);
      margin-bottom: 60px;
      border-bottom-right-radius: 10px;
      box-shadow: 0 3px 7px 0 rgba(0,0,0,0.3);
    }

    @media (min-width: ${sizes.L}) {
      top: 60px;
    }
`;

export const ModalHeader = styled.header`
    padding: 25px 25px 0;
    position: relative;
    z-index: 1;
`;

export const ModalBody = styled.main`
    padding: 0 25px 25px;
    position: relative;
`;

export const ModalClose = styled.span`
    display: block;
    margin-left: auto;
    width: 20px;
    height: 20px;
    font-size: 40px;
    line-height: .2;
    cursor: pointer;
`;