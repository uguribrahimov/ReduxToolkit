import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' },
  { id: 4, name: 'Grapes' },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
