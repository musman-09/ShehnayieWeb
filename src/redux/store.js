import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./authSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
