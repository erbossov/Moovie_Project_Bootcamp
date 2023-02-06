export const BACKEND_URL = "https://www.omdbapi.com/";
const backend = "http://192.168.31.210:3003";

export const getDataFromBackend = async (searchText) => {
  if (!searchText) {
    return (await fetch(`${backend}/movies`)).json();
  }
  return (await fetch(`${BACKEND_URL}?s=${searchText}&apiKey=ddeeed8e`)).json();
};
