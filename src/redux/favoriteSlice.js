import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProduct: 0,
  products: [
    
  ],
};
const calcTotalProduct = (products) => {
  return products.reduce((total) => total + 1, 0);
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite: (store, { payload }) => {
      const findProduct = store.products.find(
        (product) => product.id === payload.id
      );
      if (!findProduct) {
        store.products.push({ ...payload, isFavorite: true });
      }

      store.totalProduct = calcTotalProduct(store.products);
    },
    removeFromFavorite: (store, { payload }) => {
      const findProduct = store.products.find(
        (product) => product.id === payload
      );
      findProduct.isFavorite = false;
      const filteredProduct = store.products.filter(
        (item) => item.id !== payload
      );

      store.products = filteredProduct;

      store.totalProduct = calcTotalProduct(filteredProduct);
    },
  },
});

export default favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
