import { createSlice } from '@reduxjs/toolkit';

export const searchReducer = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setInputValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setInputValue } = searchReducer.actions;
