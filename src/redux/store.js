import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import favoriteSliceReducer from "./favoriteSlice";
import productSliceReducer from "./productSlice";


export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    favorite: favoriteSliceReducer,
    product: productSliceReducer,
  },
});
