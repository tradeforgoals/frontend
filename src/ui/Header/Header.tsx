import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Layer, Anchor } from 'grommet';
import RegisterLogin from '../../user/RegisterLogin';
import Logout from '../../user/Logout';
import { Logo } from '../../styles/Logo';
import { Menu } from '../../styles/Menu';
import { LoginTrigger, LoginIcon, LoginText } from '../../styles/Login';
import { SearchBar } from '../../Search/SearchBar';
import { withSizes } from '../withSizes';
import { sizes } from '../../styles/variables/sizes';
import { Modal } from '../../ui/Modal/Modal';
import { withUser, WithUserProps } from '../../user/withUser';
import { Button, ButtonIcon } from '../Button/Button';
import { FiPlus, FiUser } from 'react-icons/fi';
import MenuDropdown from '../Menu/MenuDropdown';
import { MenuDropdownTriggerIcon, MenuDropdownItem } from '../Menu/MenuDropdownStyle';

type SizesProps = {
  isAboveMedium: boolean;
};

interface HeaderAllProps extends SizesProps, WithUserProps { }

const Header: React.FunctionComponent<HeaderAllProps> = (props) => {
  const { isAboveMedium, user } = props;
  const [show, setShow] = React.useState(false);

  return (
    <>
      {user.isLoggedIn &&
        <Menu
          direction="row"
          align="center"
          pad={{
            horizontal: 'medium'
          }}
        >
          <MenuDropdown title={<><MenuDropdownTriggerIcon><FiUser /></MenuDropdownTriggerIcon> Account</>}>
            {/*
            // @ts-ignore:styled-component TS issue */}
            <MenuDropdownItem as={NavLink} to="/profile">My profile</MenuDropdownItem>
            <MenuDropdownItem><Logout>Logout</Logout></MenuDropdownItem>
          </MenuDropdown>
        </Menu>
      }

      <Box
        direction="row"
        justify="between"
        align="center"
        pad="medium"
        background="#FFF"
      >
        <Logo href="/">TradeForGoals</Logo>

        {isAboveMedium &&
          <SearchBar />
        }

        {user.isLoggedIn &&
          <Button href="/" primary rounded>
            <ButtonIcon>
              <FiPlus />
            </ButtonIcon>
            Add trade
          </Button>
        }

        {!user.isLoggedIn &&
          <LoginTrigger onClick={() => setShow(true)}>
            <LoginIcon>
              <FiUser />
            </LoginIcon>
            <LoginText>
              Login / <br />Register
            </LoginText>
          </LoginTrigger>
        }

        <Modal
          open={show}
          onClose={() => setShow(false)}
        >
          <RegisterLogin />
        </Modal>
      </Box>

      <Box
        direction="row"
        justify="around"
        pad={{
          horizontal: 'medium',
          bottom: 'medium'
        }}
        background="#FFF"
      >
        {!isAboveMedium &&
          <SearchBar />
        }
      </Box>
    </>
  );
};

const mapSizesToProps = ({ width }: { width: number }) => ({
  isAboveMedium: width >= parseInt(sizes.M, 10)
} as SizesProps);

export default withSizes(mapSizesToProps)(withUser(Header));