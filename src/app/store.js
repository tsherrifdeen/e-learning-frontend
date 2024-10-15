import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cart";
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
