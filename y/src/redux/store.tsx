import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { formReducer } from './formReducer';
import { searchReducer } from './searchReducer';
import { apiSlice } from './apiSlice';

const rootReducer = combineReducers({
  formCards: formReducer.reducer,
  search: searchReducer.reducer,
  characters: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
