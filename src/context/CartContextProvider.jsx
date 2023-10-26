import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducers";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddProduct = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <CartContext.Provider value={{ state, handleAddProduct }}>
      {children}
    </CartContext.Provider>
  );
};
