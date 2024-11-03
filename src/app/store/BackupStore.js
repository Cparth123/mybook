// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counter';

const store = configureStore({
  reducer: {
    items: counter,
  },
});

export default store;
