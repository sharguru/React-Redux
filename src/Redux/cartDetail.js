import { createSlice } from "@reduxjs/toolkit";
import productData from "../productList.json";
const initialState = {
  addedItems: [],
  productList: productData.products
};

export const cartDetail = createSlice({
  name: "cartDetail",
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      var index = state.addedItems.findIndex(
        (item) => item.id === action.payload
      );
      var updated = {
        ...state.addedItems[index],
        quantity: state.addedItems[index].quantity + 1
      };
      state.addedItems.splice(index, 1, updated);
    },
    subQuantity: (state, action) => {
      var index = state.addedItems.findIndex(
        (item) => item.id === action.payload
      );
      var updated = {
        ...state.addedItems[index],
        quantity: state.addedItems[index].quantity - 1
      };
      updated.quantity === 0
        ? state.addedItems.splice(index, 1)
        : state.addedItems.splice(index, 1, updated);
    },
    addToCart: (state, action) => {
      if (!state.addedItems.find(({ id }) => id === action.payload.id)) {
        state.addedItems.push(action.payload);
      }
    },
    openDescription: (state, action) => {
      var idx = state.productList.findIndex((x) => x.id === action.payload);
      state.productList[idx].inCart = !state.productList[idx].inCart;
    }
  }
});

export const {
  addQuantity,
  subQuantity,
  addToCart,
  openDescription
} = cartDetail.actions;

export default cartDetail.reducer;
