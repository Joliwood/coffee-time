import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 50,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      if (state.value > 0 && state.value <= 100) {
        return { ...state, value: state.value - 0.5 };
      }
      return state;
    },
    increaseBy5: (state) => {
      if (state.value >= 0 && state.value < 95) {
        return { ...state, value: state.value + 5 };
      } if (state.value >= 95 && state.value <= 100) {
        return { ...state, value: 100 };
      }
      return state;
    },
    increaseBy20: (state) => {
      if (state.value >= 0 && state.value < 80) {
        return { ...state, value: state.value + 20 };
      } if (state.value >= 80 && state.value <= 100) {
        return { ...state, value: 100 };
      }
      return state;
    },
    increaseBy50: (state) => {
      if (state.value >= 0 && state.value < 50) {
        return { ...state, value: state.value + 50 };
      } if (state.value >= 50 && state.value <= 100) {
        return { ...state, value: 100 };
      }
      return state;
    },
  },
});

export const {
  decrement, increaseBy5, increaseBy20, increaseBy50,
} = counterSlice.actions;

export default counterSlice.reducer;
