import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { postsApi } from "./query";
import Reducer from "./slice";

const RootReducer = combineReducers({
  Reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
      reducer: RootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
              .concat(postsApi.middleware)
  })
}

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


