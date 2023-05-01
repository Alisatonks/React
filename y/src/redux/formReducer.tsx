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
      return {
        ...state,
        formCards: [...state.formCards, action.payload],
      };
    },
  },
});

export const { setFormCard } = formReducer.actions;
