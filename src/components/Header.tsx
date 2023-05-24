import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header() {
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.primary.dark}`,
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <img src="images/coffeeTimeLogo.png" alt="coffee time logo" />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Coffee time
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
