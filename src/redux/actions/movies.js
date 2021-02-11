import axios from "axios";
import { BASE_URL } from "../../utils/constants.js";

import {
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
  GET_LATEST_MOVIE_SUCCESS,
  GET_LATEST_MOVIE_FAILURE,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_FAILURE,
  LOAD_POPULAR_MOVIES_SUCCESS,
  LOAD_POPULAR_MOVIES_FAILURE,
  LOAD_TOP_RATED_MOVIES_SUCCESS,
  LOAD_TOP_RATED_MOVIES_FAILURE,
} from "../types.js";
import { setLoader, setButtonLoader } from "./ui.js";

export const getMovieSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie,
});

export const getMovieFailure = () => ({
  type: GET_MOVIE_FAILURE,
  payload: {},
});

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    const { data: movie } = await axios.get(
      `${BASE_URL}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(getMovieSuccess(movie));
  } catch (error) {
    dispatch(getMovieFailure());
  } finally {
    // just for visibility purposes
    // the api endpoint works really fast
    // so the loader is barely visible
    window.setTimeout(() => {
      dispatch(setLoader(false));
    }, 3000);
  }
};

export const getPopularMoviesSuccess = (movies) => ({
  type: GET_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const getPopularMoviesFailure = () => ({
  type: GET_POPULAR_MOVIES_FAILURE,
  payload: {},
});

export const getPopularMovies = () => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );
    dispatch(getPopularMoviesSuccess(results));
  } catch (error) {
    dispatch(getPopularMoviesFailure());
  } finally {
    window.setTimeout(() => {
      dispatch(setLoader(false));
    }, 3000);
  }
};

export const getLatestMovieSuccess = (movie) => ({
  type: GET_LATEST_MOVIE_SUCCESS,
  payload: movie,
});

export const getLatestMovieFailure = () => ({
  type: GET_LATEST_MOVIE_FAILURE,
  payload: {},
});

export const getLatestMovie = () => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    const { data } = await axios.get(
      `${BASE_URL}/latest?api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(getLatestMovieSuccess(data));
  } catch (error) {
    dispatch(getLatestMovieFailure());
  } finally {
    window.setTimeout(() => {
      dispatch(setLoader(false));
    }, 3000);
  }
};

export const getTopRatedMoviesSuccess = (movies) => ({
  type: GET_TOP_RATED_MOVIES_SUCCESS,
  payload: movies,
});

export const getTopRatedMoviesFailure = () => ({
  type: GET_TOP_RATED_MOVIES_FAILURE,
  payload: {},
});

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );
    dispatch(getTopRatedMoviesSuccess(results));
  } catch (error) {
    dispatch(getTopRatedMoviesFailure());
  } finally {
    window.setTimeout(() => {
      dispatch(setLoader(false));
    }, 3000);
  }
};

export const loadPopularMoviesSuccess = (movies) => ({
  type: LOAD_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const loadPopularMoviesFailure = () => ({
  type: LOAD_POPULAR_MOVIES_FAILURE,
  payload: {},
});

export const loadPopularMovies = () => async (dispatch, getState) => {
  const { page } = getState().movies;

  try {
    dispatch(setButtonLoader(true));
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${
        page + 1
      }`
    );
    dispatch(loadPopularMoviesSuccess(results));
  } catch (error) {
    dispatch(loadPopularMoviesFailure());
  } finally {
    dispatch(setButtonLoader(false));
  }
};

export const loadTopRatedMoviesSuccess = (movies) => ({
  type: LOAD_TOP_RATED_MOVIES_SUCCESS,
  payload: movies,
});

export const loadTopRatedMoviesFailure = () => ({
  type: LOAD_TOP_RATED_MOVIES_FAILURE,
  payload: {},
});

export const loadTopRatedMovies = () => async (dispatch, getState) => {
  const { page } = getState().movies;

  try {
    dispatch(setButtonLoader(true));
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${
        page + 1
      }`
    );
    dispatch(loadTopRatedMoviesSuccess(results));
  } catch (error) {
    dispatch(loadTopRatedMoviesFailure());
  } finally {
    dispatch(setButtonLoader(false));
  }
};
