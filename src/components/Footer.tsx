import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://guillaume-jolibois.fr/">
        My portfolio website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      className="footer"
      color="primary"
    >
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

export default Footer;
