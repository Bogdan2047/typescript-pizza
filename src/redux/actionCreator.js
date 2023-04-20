import {
  DELETE_BASKET,
  DELETE_ORDER,
  GET_ORDER_PIZZA,
  GET_ORDER_PIZZA_MINUS,
  GET_ORDER_PIZZA_PLUS,
  GET_POSTS,
} from "./type";

export const getOrderPizza = (payload) => ({ type: GET_ORDER_PIZZA, payload });
export const getOrderPizzaPlus = (payload) => ({
  type: GET_ORDER_PIZZA_PLUS,
  payload,
});

export const getOrderPizzaMinus = (payload) => ({
  type: GET_ORDER_PIZZA_MINUS,
  payload,
});

export const deleteBasket = (payload) => ({
  type: DELETE_BASKET,
  payload,
});

export const deleteOrder = (payload) => ({
  type: DELETE_ORDER,
  payload,
});

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload,
});
