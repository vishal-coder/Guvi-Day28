import { createContext, useState, useReducer } from "react";
import products from "./products.json";

const cartContext = createContext();
export default cartContext;

const initialState = {
  products: products,
  cart: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "remove_from_cart":
      return {
        ...state,
        cart: [...state.cart.filter((c) => c.id !== action.payload.id)],
      };
    default:
      break;
  }
};
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};
