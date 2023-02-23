import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewMusic } from "../musicsStore/reducer";
import { addNewMovie } from "./reducer";
export const getAllMovies = createAsyncThunk(
  "getAllMovies",
  async (data, {dispatch, rejectWidthValue}) => {
    try {
      const res = await (
        await fetch("https://dummyjson.com/products/1")
      ).json();
      dispatch(addNewMovie(res));
    } catch (error) {
      rejectWidthValue(error);
    }
  }
);
export const getAllMusic = createAsyncThunk(
    "getAllMusic",
    async (data, {dispatch, rejectWidthValue}) =>{
        try {
            const res = await(
                await fetch("https://dummyjson.com/products/1")
            ).json();
            dispatch(addNewMusic(res));
        } catch (error) {
            rejectWidthValue(error)
        }
    }
)
