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
    increaseByFive: (state) => {
      if (state.value >= 0 && state.value < 95) {
        state.value += 5;
      } else if (state.value >= 95 && state.value <= 100) {
        state.value = 100;
      }
    },
  },
});

export const { decrement, increaseByFive } = counterSlice.actions;

export default counterSlice.reducer;
