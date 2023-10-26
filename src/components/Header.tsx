import React from "react";
import { AppBar, Toolbar, Typography, Link, useTheme } from "@mui/material";
import logo from "../images/logo.png";
import MenuListComposition from "./BurgerMenu";
import CaffeineBar from "./CaffeineBar";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      elevation={0}
      className="headerBarContainer"
      data-testid="header"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }} className="headerBar">
        <img src={logo} alt="coffee time logo" />
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          COFFEE TIME !
        </Typography>
        <nav className="headerBarNav">
          <ThemeSwitch />
          <Link
            variant="button"
            color="text.primary"
            href="/"
            sx={{ my: 1, mx: 1.5 }}
          >
            HOME
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            All your coffees
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Help
          </Link>
        </nav>
        <MenuListComposition />
      </Toolbar>
      <CaffeineBar />
    </AppBar>
  );
}

export default Header;
