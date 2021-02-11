import { connect } from "react-redux";
import TopRated from "./TopRated.jsx";

import {
  getTopRatedMovies,
  loadTopRatedMovies,
} from "../../redux/actions/movies.js";

const mapStateToProps = (state) => ({
  movies: state.movies.topRatedMovies,
  loader: state.ui.loader,
  buttonLoader: state.ui.buttonLoader,
});

const mapDispatchToProps = {
  getTopRatedMovies,
  loadTopRatedMovies,
};

const TopRatedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopRated);

export default TopRatedContainer;
