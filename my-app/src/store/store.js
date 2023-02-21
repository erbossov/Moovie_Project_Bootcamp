import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesStore/reducer";
import { musicsSlice } from "./musicsStore/reducer";

const commonReducer = combineReducers({
  movies: moviesSlice.reducer,
  musics: musicsSlice.reducer,
});

export const store = configureStore({
  reducer: commonReducer,
});
