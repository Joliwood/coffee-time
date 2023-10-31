import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CoffeeInReducer, CoffeePayload } from '../../../types';

// All coffees user drunk
const initialState: CoffeeInReducer = [];

export const counterSlice = createSlice({
  name: 'coffeesDrunk',
  initialState,
  reducers: {
    addCoffee: (state: CoffeeInReducer, action: PayloadAction<CoffeePayload>) => {
      const coffeeToAdd = action.payload;

      // We search in the state / initialState if the coffee we want to add already exists
      const existingCoffee = state.find((coffee) => coffee.title === coffeeToAdd.title);

      // If yes, we just increment the quantity
      if (existingCoffee) {
        existingCoffee.quantity += 1;
        // If not, we add it with quantity 1 (not provided in the event)
      } else {
        const newCoffee = {
          quantity: 1,
          ...coffeeToAdd,
        };
        state.push(newCoffee);
      }
    },
  },
});

export const { addCoffee } = counterSlice.actions;

export default counterSlice.reducer;
