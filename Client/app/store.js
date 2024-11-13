import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../freture/Product/ProductSlice";
import NewProductReducer from "../freture/Product/NewProductSlice";
import OffersProductReducer from "../freture/Product/OffersProductSlice";

const store = configureStore({
  reducer: {
    Products: ProductReducer,
    NewProduct: NewProductReducer,
    OfferProduct: OffersProductReducer,
  },
});
export default store;
