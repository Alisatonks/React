import { createSlice } from '@reduxjs/toolkit';
import { IFormCardAction, IFormCardState } from '../types/types';

const initialState: IFormCardState = {
  formCards: [],
};

export const formReducer = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setFormCard: (state, action: IFormCardAction) => {
      state.formCards.push(action.payload);
    },
  },
});

export const { setFormCard } = formReducer.actions;
