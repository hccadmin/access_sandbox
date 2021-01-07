import { configureStore } from '@reduxjs/toolkit';
import reducer from './cancersSlice';

const store = configureStore({
  reducer
});

export default store;
