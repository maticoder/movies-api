import {
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
} from "../types.js";

const initialState = {
  movies: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_POPULAR_MOVIES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default movies;
