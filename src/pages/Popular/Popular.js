import { connect } from "react-redux";
import Popular from "./Popular.jsx";

import {
  getPopularMovies,
  loadPopularMovies,
} from "../../redux/actions/movies.js";

const mapStateToProps = (state) => ({
  movies: state.movies.popularMovies,
  loader: state.ui.loader,
  buttonLoader: state.ui.buttonLoader,
});

const mapDispatchToProps = {
  getPopularMovies,
  loadPopularMovies,
};

const PopularContainer = connect(mapStateToProps, mapDispatchToProps)(Popular);

export default PopularContainer;
