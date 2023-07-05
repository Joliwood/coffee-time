import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../images/logo.png";
import MenuListComposition from "./BurgerMenu";
import CaffeineBar from "./CaffeineBar";
import { useTheme } from "@mui/material/styles";
import { getDesignTokens } from "../theme/themeColors";

function Header() {
  const [themeChanged, isThemeChanged] = useState(false);
  const theme = useTheme();
  const mode = theme.palette.mode;

  useEffect(() => {
    const selectedTheme = themeChanged ? "light" : "dark";
    const modeColors = getDesignTokens(selectedTheme);
    console.log(modeColors.palette.primary.main);
  }, [isThemeChanged]);

  const changerTheme = () => {
    isThemeChanged(!themeChanged);
    const selectedTheme = themeChanged ? "light" : "dark";
    const modeColors = getDesignTokens(selectedTheme);
    console.log(themeChanged, modeColors);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      // color="primary"
      className="headerBarContainer"
      data-testid="header"
      // sx={{ backgroundColor: modeColors.palette.primary.main }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }} className="headerBar">
        <img src={logo} alt="coffee time logo" />
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          COFFEE TIME !
        </Typography>
        <nav className="headerBarNav">
          <button
            // style={{ backgroundColor: modeColors.palette.primary.main }}
            style={{ cursor: "pointer" }}
            onClick={() => changerTheme()}
          >
            X
          </button>
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
