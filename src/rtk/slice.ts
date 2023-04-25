import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeState = {
  orderPizza: any[],
  allPosts: any[],
};

const initialState: TypeState ={
  orderPizza: [],
  allPosts: [],
};

const state = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getOrderPizza(state, action: PayloadAction<any>) {
      state.orderPizza.some((item) => {
        if (item.id === action.payload.id) {
          item.count += action.payload.count;
          item.price += action.payload.price;
        }
      });

      const searchEqualId = state.orderPizza.some(
        (item) => item.id === action.payload.id
      );

      if (searchEqualId) {
        state.orderPizza = [...state.orderPizza];
      } else {
        state.orderPizza = [action.payload, ...state.orderPizza];
      }
    },
    getOrderPizzaPlus(state, action: PayloadAction<any>) {
      state.orderPizza.some((item) => {
        if (item.id === action.payload.id) {
          item.count++;
          item.price += action.payload.price / action.payload.count;
        }
      });

      state.orderPizza = [...state.orderPizza];

      const searchPluslId = state.orderPizza.some(
        (item) => item.id === action.payload.id
      );

      if (searchPluslId) {
        state.orderPizza = [...state.orderPizza];
      } else {
        state.orderPizza = [action.payload, ...state.orderPizza];
      }
    },
    getOrderPizzaMinus(state, action: PayloadAction<any>) {
      state.orderPizza.some((item) => {
        if (item.id === action.payload.id) {
          item.count--;
          item.price -= action.payload.price / action.payload.count;
        }
      });

      const searchMinuslId = state.orderPizza.some(
        (item) => item.id === action.payload.id
      );

      if (searchMinuslId) {
        state.orderPizza = [...state.orderPizza];
      } else {
        state.orderPizza = [action.payload, ...state.orderPizza];
      }
    },
    deleteBasket(state, action: PayloadAction<any>) {
      let empty = action.payload;
      empty = [];
      state.orderPizza = empty;
    },
    deleteOrder(state, action: PayloadAction<any>) {
      state.orderPizza = state.orderPizza.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  getOrderPizza,
  getOrderPizzaPlus,
  getOrderPizzaMinus,
  deleteBasket,
  deleteOrder,
} = state.actions;
export default state.reducer;
