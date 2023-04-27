import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrderPizza = {
      id: number,
      name: string,
      img: any,
      count: number,
      price: number,
      size: any,
      dough: any,
    }

type AllPosts = {
  id: number,
  title: string,
  body: string,
}

type TypeState ={
  orderPizza: OrderPizza[],
  allPosts: AllPosts[],
}

const initialState: TypeState ={
  orderPizza: [],
  allPosts: [],
};

const state = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getOrderPizza(state, action: PayloadAction<any>) {
      state.orderPizza.some((item:any) => {
        if (item.id === action.payload) {
          item.count += action.payload;
          item.price += action.payload;
        }
      });

      const searchEqualId = state.orderPizza.some(
        (item) => item.id === action.payload
      );

      if (searchEqualId) {
        state.orderPizza = [...state.orderPizza];
      } else {
        state.orderPizza = [action.payload, ...state.orderPizza];
      }
    },
    getOrderPizzaPlus(state, action: PayloadAction<any>) {
      state.orderPizza.some((item:any) => {
        if (item.id === action.payload) {
          item.count++;
          item.price += action.payload / action.payload;
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
      state.orderPizza.some((item:any) => {
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
    deleteOrder(state, action: PayloadAction<number>) {
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
