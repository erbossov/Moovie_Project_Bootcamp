import { createSlice } from "@reduxjs/toolkit";
import { initialStore } from "./store";

export const musicsSlice = createSlice({
  name: "movies",
  initialState: initialStore,
  reducers: {
    addNewMusic: (state, music) => {
      state.musics.push(music.payload);
    },
    deleteMusic: (state, music) => {
      state.musics = state.musics.filter(
        (el) => el.singer !== music.singer && el.song && music.song
      );
    },
  },
});
export const { addNewMusic, deleteMusic } = musicsSlice.actions;
