import { connect } from "react-redux";
import Movie from "./Movie.jsx";

import { getMovie } from "../../redux/actions/movies.js";

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loader: state.ui.loader,
});

const mapDispatchToProps = {
  getMovie,
};

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie);

export default MovieContainer;
