// src/store/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter"; // Ensure this path is correct
import { persistReducer, persistStore } from "redux-persist"; 
import storage from "redux-persist/lib/storage"; // Default storage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  items: counter,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(store);
