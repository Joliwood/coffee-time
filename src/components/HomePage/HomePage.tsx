import React from 'react';
import {
  Typography, Container, Grid,
} from '@mui/material';
import Footer from '../Footer';
import Header from '../Header/Header';
import coffees from '../../data/coffeesList';
import CoffeeCard from './CoffeeCard';

function HomePage({ toggleColorMode }: any) {
  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{
          pt: '2rem', pb: '2rem', pl: '1rem', pr: '1rem',
        }}
      >
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
          margin="0"
          lineHeight={1.2}
        >
          You need a break, and you deserve it ! Let's pick up the coffee
          you prefer to continue your wonderfull day.
        </Typography>
      </Container>

      <Container
        maxWidth="md"
        component="main"
        className="contentsContainer"
      >
        <Grid
          container
          spacing={5}
          alignItems="flex-end"
          justifyContent="center"
        >
          {coffees.map((coffee) => (
            <Grid
              item
              key={coffee.title}
              xs={12}
              sm={6}
              md={3}
            >
              <CoffeeCard coffee={coffee} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
