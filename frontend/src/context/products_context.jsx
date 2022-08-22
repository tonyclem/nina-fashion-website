import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/product_reducer";
import initialState from "../initialState/initialState";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({
      type: "OPEN_SIDEBAR",
    });
  };

  const closeSidebar = () => {
    dispatch({
      type: "CLOSE_SIDEBAR",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        const products = result.data;
        dispatch({ type: "FETCH_SUCCESS", payload: products });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
