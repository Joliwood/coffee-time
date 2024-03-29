import React from 'react';
import { Typography, Link, Container } from '@mui/material';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://guillaume-jolibois.fr/"
        target="_blank"
      >
        My portfolio website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

function Footer() {
  return (
    <Container
      data-testid="footer"
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      className="footer"
      color="primary"
    >
      <Copyright />
    </Container>
  );
}

export default Footer;
