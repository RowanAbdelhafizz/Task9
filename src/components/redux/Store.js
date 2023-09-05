import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favourite';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;