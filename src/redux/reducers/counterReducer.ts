import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 50,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      if (state.value > 0 && state.value <= 100) {
        state.value -= 0.5;
      }
    },
    increaseBy5: (state) => {
      if (state.value >= 0 && state.value < 95) {
        state.value += 5;
      } else if (state.value >= 95 && state.value <= 100) {
        state.value = 100;
      }
    },
    increaseBy20: (state) => {
      if (state.value >= 0 && state.value < 80) {
        state.value += 20;
      } else if (state.value >= 80 && state.value <= 100) {
        state.value = 100;
      }
    },
    increaseBy50: (state) => {
      if (state.value >= 0 && state.value < 50) {
        state.value += 50;
      } else if (state.value >= 50 && state.value <= 100) {
        state.value = 100;
      }
    },
  },
});

export const { decrement, increaseBy5, increaseBy20, increaseBy50 } = counterSlice.actions;

export default counterSlice.reducer;
