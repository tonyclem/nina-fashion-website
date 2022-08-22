import React, { useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import initialState from "../initialState/initialState";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, products) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, products } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
