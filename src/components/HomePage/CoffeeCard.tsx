import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  useMediaQuery,
} from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
// import type { CoffeeSimplified } from '../../../types';
import { AppDispatch } from '../../redux/store';
import { increaseBy5, increaseBy20, increaseBy50 } from '../../redux/reducers/caffeineReducer';
import { addCoffee } from '../../redux/reducers/coffeesReducer';

function CoffeeCard({ coffee }: any) {
  const isSmallScreen = useMediaQuery('(max-width:550px)');
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
    <Card className="coffeeContainerForm">
      <CardHeader
        component="h2"
        title={coffee.title}
        titleTypographyProps={{ align: 'center' }}
        action={coffee.title === 'Pro' ? <StarIcon /> : null}
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700]),
          margin: 0,
        }}
      />
      <CardContent className="coffeeContainer">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
          }}
        >
          <img src={coffee.picture} alt={coffee.picture} />
        </Box>
        {!isSmallScreen && (
          <>
            <h3>
              {coffee.price}
            </h3>
            <h3>
              {coffee.caffeineQuantityResumed}
            </h3>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button
          fullWidth={!isSmallScreen}
          variant={coffee.buttonVariant as 'outlined' | 'contained'}
          onClick={() => {
            handleIncrement(coffee.caffeineQuantity);
            dispatch(addCoffee(coffee));
          }}
          data-testid="incrementButton"
          className="incrementButton"
        >
          {coffee.buttonText}
          {isSmallScreen && (
          <span style={{ marginLeft: 'auto' }}>
            {coffee.caffeineQuantityResumed}
            {' '}
            |
            {' '}
            {coffee.price}
          </span>
          )}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
