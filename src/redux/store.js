import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import dragonsSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonsSlice,
  },
});
export default store;
