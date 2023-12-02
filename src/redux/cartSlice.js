import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProduct: 0,
  totalPrice: 0,
  products: [],
  totalDiscount: 0,
  
};
const calcTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
};
const calcTotalProduct = (products) => {
  return products.reduce((total, product) => total + product.qty, 0);
};
const calcTotalDiscount = (products) => {
  return products.reduce(
    (total, product) => total + product.discount * product.qty,
    0
  );
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (store, { payload }) => {
      const findProduct = store.products.find(
        (product) => product.id === payload.id
      );
      if (findProduct) {
        findProduct.qty++;
      } else {
        store.products.push({
          ...payload,
          qty: 1,
          discount: (payload.discountPercentage * payload.price) / 100,
        });
      }
      store.totalDiscount = calcTotalDiscount(store.products);
      store.totalProduct = calcTotalProduct(store.products);
      store.totalPrice = calcTotalPrice(store.products);
    },
    removeFromCart: (store, { payload }) => {
      const filteredProduct = store.products.filter(
        (item) => item.id !== payload
      );

      store.products = filteredProduct;
      store.totalDiscount = calcTotalDiscount(filteredProduct);
      store.totalProduct = calcTotalProduct(filteredProduct);
      store.totalPrice = calcTotalPrice(filteredProduct);
    },
    increment: (store, { payload }) => {
      const findProduct = store.products.find((item) => item.id === payload);
      findProduct.qty++;
      store.totalDiscount = calcTotalDiscount(store.products);
      store.totalProduct = calcTotalProduct(store.products);
      store.totalPrice = calcTotalPrice(store.products);
    },
    decrement: (store, { payload }) => {
      const findProduct = store.products.find((item) => item.id === payload);
      const filteredProduct = store.products.filter(
        (item) => item.id !== payload
      );
      if (findProduct.qty === 1) {
        store.products = filteredProduct;
      }
      findProduct.qty--;
      store.totalDiscount = calcTotalDiscount(store.products);
      store.totalProduct = calcTotalProduct(store.products);
      store.totalPrice = calcTotalPrice(store.products);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
