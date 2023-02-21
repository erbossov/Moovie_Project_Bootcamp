import { createSlice } from "@reduxjs/toolkit";
import { initStore } from "./storageStore";
import { reducer } from "redux";
import { configureStore } from "@reduxjs/toolkit";
const filmsSlice = createSlice({
  name: "films",
  initialState: initStore,
  reducers: {
    addNewFilms: (state, films) => {
      initStore.push(films);
    },
  },
});
export const { addNewFilms } = filmsSlice.actions;
export const filmsStore = configureStore({
  reducer: filmsSlice.reducer,
});
