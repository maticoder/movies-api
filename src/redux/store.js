import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import ui from "./reducers/ui.js";
import movies from "./reducers/movies.js";

const reducers = combineReducers({
  ui,
  movies,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
