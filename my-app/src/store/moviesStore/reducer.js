import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNewMovie: (state, movie) => {
      state.movies.push(movie);
    },
    deleteMovie: (state, movie) => {
      state.movies = state.movies.filter(
        (el) => el.name !== movie.name && el.rating !== movie.rating
      );
    },
  },
});
export const { addNewMovie, deleteMovie } = moviesSlice.actions;
