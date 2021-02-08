import { SET_LOADER } from "../types.js";

const initialState = {
  loader: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};

export default ui;
