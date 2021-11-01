import { configureStore } from "@reduxjs/toolkit";
import cartDetail from "./cartDetail";
export const store = configureStore({
  reducer: {
    cartDetail
  }
});
