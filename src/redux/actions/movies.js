import axios from "axios";

import { GET_POPULAR_MOVIES_SUCCESS } from "../types.js";
import { setLoader } from "./ui.js";

export const getPopularMoviesSuccess = (movies) => ({
  type: GET_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});
export const getPopularMovies = () => async (dispatch) => {
  dispatch(setLoader(true));
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  window.setTimeout(() => {
    dispatch(setLoader(false));
  }, 1000);
  dispatch(getPopularMoviesSuccess(results));
};
