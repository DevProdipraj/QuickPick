import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const NewProductSlice = createSlice({
  name: "NewProduct",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
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

export default NewProductSlice.reducer;
