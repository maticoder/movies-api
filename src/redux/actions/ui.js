import { SET_LOADER } from "../types.js";

export const setLoader = (loader) => ({
  type: SET_LOADER,
  payload: loader,
});
