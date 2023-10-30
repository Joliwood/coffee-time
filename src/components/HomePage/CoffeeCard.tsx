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
import type { Coffee } from '../../../types';

type CoffeeCardProps = {
  coffee: Coffee;
  handleIncrement: (caffeineQuantity: number) => void;
};

function CoffeeCard({ coffee, handleIncrement }: CoffeeCardProps) {
  const isSmallScreen = useMediaQuery('(max-width:550px)');

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
          onClick={() => handleIncrement(coffee.caffeineQuantity)}
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
