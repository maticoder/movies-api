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

const initialState = {
  movie: null,
  popularMovies: [],
  topRatedMovies: [],
  latestMovie: null,
  page: 0,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
        page: 1,
      };
    case GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload,
        page: 1,
      };
    case GET_LATEST_MOVIE_SUCCESS:
      return {
        ...state,
        latestMovie: action.payload,
      };
    case LOAD_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: [...state.popularMovies, ...action.payload],
        page: state.page + 1,
      };
    case LOAD_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: [...state.topRatedMovies, ...action.payload],
        page: state.page + 1,
      };
    case GET_MOVIE_FAILURE:
      return initialState;
    case GET_POPULAR_MOVIES_FAILURE:
      return initialState;
    case GET_TOP_RATED_MOVIES_FAILURE:
      return initialState;
    case GET_LATEST_MOVIE_FAILURE:
      return initialState;
    case LOAD_POPULAR_MOVIES_FAILURE:
      return initialState;
    case LOAD_TOP_RATED_MOVIES_FAILURE:
      return initialState;
    default:
      return state;
  }
};

export default movies;
