import React from 'react';
import {
  Typography, Container, Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import Footer from '../Footer';
import Header from '../Header/Header';
import coffees from '../../data/coffeesList';
import CoffeeCard from './CoffeeCard';
import { AppDispatch } from '../../redux/store';
import { increaseBy5, increaseBy20, increaseBy50 } from '../../redux/reducers/counterReducer';

function HomePage({ toggleColorMode }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = (caffeineQuantity: number) => {
    switch (caffeineQuantity) {
      case 5: dispatch(increaseBy5());
        break;
      case 20: dispatch(increaseBy20());
        break;
      case 50: dispatch(increaseBy50());
        break;
      default: console.log('Invalid caffeine quantity');
        break;
    }
  };

  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 6, pb: 6 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
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
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={coffee.title}
              xs={12}
              sm={coffee.title === 'Enterprise' ? 12 : 6}
              md={3}
            >
              <CoffeeCard coffee={coffee} handleIncrement={handleIncrement} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
