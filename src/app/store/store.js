// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counter';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './features/localStorageUtils';
const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    items: counter,
    preloadedState
  },
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
export default store;
