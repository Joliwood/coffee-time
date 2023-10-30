import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CoffeeInReducer } from '../../../types';

interface CoffeePayload {
  title: string;
  price: string;
  caffeineQuantityResumed: string;
  quantity?: number;
  picture: string;
}

const initialState: CoffeeInReducer = [];

export const counterSlice = createSlice({
  name: 'coffeesDrunk',
  initialState,
  reducers: {
    addCoffee: (state: CoffeeInReducer, action: PayloadAction<CoffeePayload>) => {
      const {
        title, quantity, picture, ...rest
      } = action.payload;
      const existingCoffeeIndex = state.findIndex((coffee) => coffee.title === title);

      if (existingCoffeeIndex !== -1) {
        state[existingCoffeeIndex] = {
          ...state[existingCoffeeIndex],
          quantity: (state[existingCoffeeIndex].quantity || 1) + (quantity || 1),
        };
      } else {
        state.push({
          title,
          quantity: quantity || 1,
          picture,
          ...rest,
        });
      }
    },
  },
});

export const { addCoffee } = counterSlice.actions;

export default counterSlice.reducer;
