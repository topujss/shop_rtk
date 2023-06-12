import { configureStore } from '@reduxjs/toolkit';
import ShopSlice from '../features/Shop/ShopSlice';

const store = configureStore({
  reducer: {
    shopStore: ShopSlice,
  },
});

export default store;
