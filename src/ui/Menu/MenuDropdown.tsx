import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { withUser, WithUserProps } from '../../user/withUser';
import { FiChevronDown } from 'react-icons/fi';
import { StyledMenuDropdown, MenuDropdownTrigger, MenuDropdownChevron, MenuDropdownBody, MenuDropdownProfile } from './MenuDropdownStyle';

type MenuDropdownProps = {
  title: JSX.Element;
};

interface MenuDropdownAllProps extends MenuDropdownProps, WithUserProps { }

const MenuDropdown: React.FunctionComponent<MenuDropdownAllProps> = (props) => {
  const { user, title } = props;
  const [show, setShow] = React.useState(false);

  return (
    <StyledMenuDropdown
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <OutsideClickHandler onOutsideClick={() => setShow(false)}>
        <MenuDropdownTrigger>
          {title}
          <MenuDropdownChevron open={show}>
            <FiChevronDown />
          </MenuDropdownChevron>
        </MenuDropdownTrigger>
        {show &&
          <MenuDropdownBody>
            {user && user.userDetails &&
              <MenuDropdownProfile>
                Welcome back, {user.userDetails.displayName}
              </MenuDropdownProfile>
            }
            {props.children}
          </MenuDropdownBody>
        }
      </OutsideClickHandler>
    </StyledMenuDropdown>
  );
};

export default withUser(MenuDropdown);