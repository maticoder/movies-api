import { connect } from "react-redux";
import Popular from "./Popular.jsx";

import { getPopularMovies } from "../../redux/actions/movies.js";

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loader: state.ui.loader,
});

const mapDispatchToProps = {
  getPopularMovies,
};

const PopularContainer = connect(mapStateToProps, mapDispatchToProps)(Popular);

export default PopularContainer;
