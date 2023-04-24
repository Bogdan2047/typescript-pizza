import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Reducer from "./slice";

const RootReducer = combineReducers({
  order: Reducer,
});

export const store = configureStore({
  reducer: {
    toolkit: RootReducer,
  },
});
