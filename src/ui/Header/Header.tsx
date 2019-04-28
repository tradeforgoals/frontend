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

interface HeaderProps {
  isLoggedIn: boolean;
}

type SizesProps = {
  isAboveMedium: boolean;
};

interface HeaderAllProps extends HeaderProps, SizesProps { }

const Header: React.FunctionComponent<HeaderAllProps> = (props) => {
  const { isLoggedIn, isAboveMedium } = props;
  const [show, setShow] = React.useState(false);
  let navLinks = null;

  if (isLoggedIn) {
    navLinks = (
      <>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/profile">
          <span>Profile</span>
        </NavLink>
        <Logout>
          <span>Logout</span>
        </Logout>
      </>
    );
  }

  return (
    <>
      {isLoggedIn &&
        <Menu
          direction="row"
          align="center"
          pad="medium"
        >
            {navLinks}
        </Menu>
      }

      <Box
        direction="row"
        align="center"
        pad="medium"
      >
        <Logo href="/">TradeForGoals</Logo>

        {isAboveMedium &&
          <SearchBar />
        }

        <LoginTrigger onClick={() => setShow(true)}>
          <LoginIcon />
          <LoginText>
            Login / <br />Register
          </LoginText>
        </LoginTrigger>

        <Modal
          open={show}
          onClose={() => setShow(false)}
        >
          <RegisterLogin />
        </Modal>

        {/* <Button href="/" primary rounded inHeader>Nieuw product</Button> */}
      </Box>

      <Box
        direction="row"
        justify="around"
        pad={{
          horizontal: 'medium',
          bottom: 'medium'
        }}
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

export default withSizes(mapSizesToProps)(Header);