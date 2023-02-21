import { initialStore } from "./store";

export const musicAction = (state = initialStore, action) => {
  switch (action.type) {
    case "Hello":
      state.musics.push(action.value);
      break;
  }
};
