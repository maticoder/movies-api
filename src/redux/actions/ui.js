import { SET_LOADER, SET_BUTTON_LOADER } from "../types.js";

export const setLoader = (loader) => ({
  type: SET_LOADER,
  payload: loader,
});

export const setButtonLoader = (loader) => ({
  type: SET_BUTTON_LOADER,
  payload: loader,
});
