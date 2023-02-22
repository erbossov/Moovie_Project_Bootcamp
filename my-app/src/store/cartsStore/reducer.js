import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, movie) => {
      state.cart.push(movie.payload);
    },
    updateCart: (state, data) => {
      const { title, newTitle } = data.payload;
      state.cart = state.cart.map((el) => {
        if (el.title === title) {
          el.title = newTitle;
        }
        return el;
      });
    },
    deleteItem: (state, data) => {
 const {description} = data.payload
 state.cart = state.cart.filter(el =>el.description !== description)
    },
  },
});

export const { addToCart, updateCart, deleteItem } = cartSlice.actions;
