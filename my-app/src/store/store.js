import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesStore/reducer";
import { musicsSlice } from "./musicsStore/reducer";
import { cartSlice } from "./cartsStore/reducer";

const commonReducer = combineReducers({
  movies: moviesSlice.reducer,
  musics: musicsSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: commonReducer,
});
