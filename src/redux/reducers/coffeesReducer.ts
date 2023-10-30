import { createSlice } from '@reduxjs/toolkit';
import type { CoffeeInReducer } from '../../../types';

const initialState: CoffeeInReducer = [];

console.log(initialState);

export const counterSlice = createSlice({
  name: 'coffeesDrunk',
  initialState,
  reducers: {
    addCoffee: (state) => {
      if (state.value > 0 && state.value <= 100) {
        return { ...state, value: state.value - 0.5 };
      }
      return state;
    },
  },
});

export const {
  addCoffee,
  // increaseBy5,
  // increaseBy20,
  // increaseBy50,
} = counterSlice.actions;

export default counterSlice.reducer;
