import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "AllProducts",
  initialState: {
    products: [],
    isLoading: false,
    data: null,
    isError: false,
    totalPrice: 0,
    totalQuantity: 0,
  },

  reducers: {
    addToCard(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.Quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          image: newItem.image,
          Quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log("Error", action.error.message);
      state.isError = true;
    });
  },
});

export const { addToCard } = productSlice.actions;
export default productSlice.reducer;
