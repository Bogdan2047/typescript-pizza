import { combineReducers } from "redux";
import { Reducer } from "./reducer";

export const RootReducer = combineReducers({
  order: Reducer,
});
