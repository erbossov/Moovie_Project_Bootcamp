export const BACKEND_URL = 'https://www.omdbapi.com/';

export const getDataFromBackend = async (searchText) => {
    return (await fetch(`${BACKEND_URL}?s=${searchText}&apiKey=ddeeed8e`)).json()
}