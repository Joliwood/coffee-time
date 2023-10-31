import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  useTheme,
  Divider,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

export default function BurgerMenu({ toggleColorMode }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2} style={{ zIndex: '2' }}>
      <Button
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          color: theme.palette.primary.contrastText,
          minWidth: 'unset',
          display: { md: 'none' },
        }}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className="burgerMenuList"
        sx={{ color: theme.palette.primary.contrastText }}
      >
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/"
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/dashboard"
        >
          All my coffees
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href="https://www.choosingtherapy.com/caffeine-addiction/"
          target="_blank"
        >
          Help
        </MenuItem>
        <Divider component="li" sx={{ bgcolor: theme.palette.primary.light }} />
        <ThemeSwitch toggleColorMode={toggleColorMode} />
      </Menu>
    </Stack>
  );
}
