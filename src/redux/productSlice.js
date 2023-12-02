import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  fetchingProducts: [],
  isLoading: false,
  hasError: false,
  categoryFilter: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const res = await fetch(
        "https://653a08afe3b530c8d9e90129.mockapi.io/products"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e.massage);
    }
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    selectProduct: (store, { payload }) => {
      store.product = payload;
    },
    setCategoryFilter: (store, { payload }) => {
      store.categoryFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (store) => {
      store.hasError = false;
      store.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (store, action) => {
      store.hasError = false;
      store.isLoading = false;
      store.fetchingProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (store) => {
      store.hasError = true;
      store.isLoading = false;
    });
  },
});

export default productSlice.reducer;
export const { setCategoryFilter, selectProduct } = productSlice.actions;
