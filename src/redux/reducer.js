import {
  DELETE_BASKET,
  DELETE_ORDER,
  GET_ORDER_PIZZA,
  GET_ORDER_PIZZA_MINUS,
  GET_ORDER_PIZZA_PLUS,
  GET_POSTS,
} from "./type";

const initialState = {
  orderPizza: [],
  allPosts: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_PIZZA:
      const updatedQuantityState = state.orderPizza;
      updatedQuantityState.some((item) => {
        if (item.id === action.payload.id) {
          console.log(item.count, action.payload.count);
          console.log(item.price, action.payload.price);
          item.count += action.payload.count;
          item.price += action.payload.price;
        }
      });

      const searchEqualId = updatedQuantityState.some(
        (item) => item.id === action.payload.id
      );

      if (searchEqualId) {
        return { ...state, orderPizza: [...updatedQuantityState] };
      } else {
        return { ...state, orderPizza: [action.payload, ...state.orderPizza] };
      }

    case GET_ORDER_PIZZA_PLUS:
      const dataForPlus = state.orderPizza;
      dataForPlus.some((item) => {
        if (item.id === action.payload.id) {
          item.count++;
          item.price += action.payload.price / action.payload.count;
        }
      });

      const searchPluslId = dataForPlus.some(
        (item) => item.id === action.payload.id
      );

      if (searchPluslId) {
        return { ...state, orderPizza: [...dataForPlus] };
      } else {
        return { ...state, orderPizza: [action.payload, ...state.orderPizza] };
      }
    case GET_ORDER_PIZZA_MINUS:
      const dataForMinus = state.orderPizza;
      dataForMinus.some((item) => {
        if (item.id === action.payload.id) {
          item.count--;
          item.price -= action.payload.price / action.payload.count;
        }
      });

      const searchMinuslId = dataForMinus.some(
        (item) => item.id === action.payload.id
      );

      if (searchMinuslId) {
        return { ...state, orderPizza: [...dataForMinus] };
      } else {
        return { ...state, orderPizza: [action.payload, ...state.orderPizza] };
      }

    case DELETE_BASKET:
      let empty = action.payload;
      empty = [];
      return { ...state, orderPizza: empty };

    case DELETE_ORDER:
      let deleteOrd = state.orderPizza;
      let deleteOrderPizza = deleteOrd.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        orderPizza: deleteOrderPizza,
      };

    case GET_POSTS:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};
