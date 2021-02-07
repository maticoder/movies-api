import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import movies from "./reducers/movies.js";

const reducers = combineReducers({
  movies,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
