import { SET_LOADER, SET_BUTTON_LOADER } from "../types.js";

const initialState = {
  loader: false,
  buttonLoader: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case SET_BUTTON_LOADER:
      return {
        ...state,
        buttonLoader: action.payload,
      };
    default:
      return state;
  }
};

export default ui;
