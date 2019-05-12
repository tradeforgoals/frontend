import styled, { css } from 'styled-components/macro';
import { zIndex } from '../../styles/variables/zIndex';

export const StyledMenuDropdown = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  align-items: center;
`;

export const MenuDropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 12px;
  cursor: pointer;
  user-select: none;

  svg {
    display: block;
  }
`;

export const MenuDropdownBody = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 100%;
  width: 230px;
  padding: 10px 0;
  font-size: 13px;
  background-color: #FFF;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
  z-index: ${zIndex.dropdownMenu};
`;

type MenuDropdownChevronProps = {
  open: boolean;
};
export const MenuDropdownChevron = styled.div<MenuDropdownChevronProps>`
  padding-left: 10px;

  svg {
    transition: .2s ease-in-out;
  }

  ${props => props.open && css`
    svg {
      transform: rotate(180deg);
    }
  `}
`;

export const MenuDropdownProfile = styled.div`
  padding: 5px 15px 15px;
  margin-bottom: 10px;
  font-weight: bold;
  border-bottom: 1px solid #F2F2F2;
`;

export const MenuDropdownTriggerIcon = styled.div`
  padding-right: 5px;
  font-size: 16px;
`;

export const MenuDropdownItem = styled.div`
  display: block;
  padding: 0 15px;
  line-height: 32px;
  color: #333;

  &:hover {
    text-decoration: none;
    background-color: #f2f2f2;
    color: #666;
  }

  span {
    display: block;
    cursor: pointer;
  }
`;