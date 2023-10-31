import { configureStore } from '@reduxjs/toolkit';
import caffeineReducer from './reducers/caffeineReducer';
import coffeesReducer from './reducers/coffeesReducer';

// Create the store
export const store = configureStore({
  reducer: {
    counter: caffeineReducer,
    coffees: coffeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
