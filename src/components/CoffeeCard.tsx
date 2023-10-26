import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import type { Coffee } from '../../types';

type CoffeeCardProps = {
  coffee: Coffee;
  handleIncrement: (caffeineQuantity: number) => void;
};

function CoffeeCard({ coffee, handleIncrement }: CoffeeCardProps) {
  return (
    <Card>
      <CardHeader
        title={coffee.title}
        titleTypographyProps={{ align: 'center' }}
        action={coffee.title === 'Pro' ? <StarIcon /> : null}
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700]),
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
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant={
            coffee.buttonVariant as 'outlined' | 'contained'
          }
          onClick={() => handleIncrement(coffee.caffeineQuantity)}
          data-testid="incrementButton"
        >
          {coffee.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
