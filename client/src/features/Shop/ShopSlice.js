import { createSlice } from '@reduxjs/toolkit';

export const ShopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: [],
    categories: [],
    brands: [],
    tags: [],
    loading: false,
    message: '',
    error: '',
  },
  reducers: {
    brandGetSuccess: (state, { type, payload }) => {
      state.brands = payload;
    },
    brandGetFailed: (state, { type, payload }) => {
      state.error = payload;
    },
    brandCreateSuccess: (state, { type, payload }) => {
      state.brands = [...state.brands, payload];
    },
    brandDeleteSuccess: (state, { type, payload }) => {
      state.brands = state.brands.filter((d) => d._id !== payload);
    },
    brandStatusAndUpdateSuccess: (state, { type, payload }) => {
      state.brands[state.brands.findIndex((myId) => myId._id === payload._id)];
      state.brands = state.brands;
    },
  },
});

export const {
  brandGetSuccess,
  brandGetFailed,
  brandCreateSuccess,
  brandDeleteSuccess,
  brandStatusAndUpdateSuccess,
} = ShopSlice.actions;

export default ShopSlice.reducer;
