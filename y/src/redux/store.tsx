import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { formReducer } from './formReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  formCards: formReducer.reducer,
  search: searchReducer.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
