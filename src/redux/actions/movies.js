import { GET_POPULAR_MOVIES_SUCCESS } from "../types.js";

export const getPopularMovies = () => ({
  type: GET_POPULAR_MOVIES_SUCCESS,
  payload: ["movie1", "movie2", "movie3"],
});
