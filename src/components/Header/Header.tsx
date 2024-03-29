import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import BurgerMenu from './BurgerMenu';
import CaffeineBar from './CaffeineBar';
import ThemeSwitch from './ThemeSwitch';

function Header({ toggleColorMode }: any) {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className="headerBarContainer"
      data-testid="header"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }} className="headerBar">
        <RouterLink to="/">
          <img src={logo} alt="coffee time logo" />
        </RouterLink>
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h1>
            COFFEE TIME !
          </h1>
        </Typography>
        <nav className="headerBarNav">
          <ThemeSwitch toggleColorMode={toggleColorMode} />
          <Typography
            component={RouterLink}
            to="/"
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Typography>
          <Typography
            component={RouterLink}
            to="/dashboard"
            sx={{ my: 1, mx: 1.5 }}
          >
            All my coffees
          </Typography>
          <Typography
            component={Link}
            href="https://www.choosingtherapy.com/caffeine-addiction/"
            target="_blank"
            sx={{ my: 1, mx: 1.5 }}
          >
            Help
          </Typography>
        </nav>
        <BurgerMenu toggleColorMode={toggleColorMode} />
      </Toolbar>
      <CaffeineBar />
    </AppBar>
  );
}

export default Header;
