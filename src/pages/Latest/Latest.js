import { connect } from "react-redux";
import Latest from "./Latest.jsx";

import { getLatestMovie } from "../../redux/actions/movies.js";

const mapStateToProps = (state) => ({
  movie: state.movies.latestMovie,
  loader: state.ui.loader,
  buttonLoader: state.ui.buttonLoader,
});

const mapDispatchToProps = {
  getLatestMovie,
};

const LatestContainer = connect(mapStateToProps, mapDispatchToProps)(Latest);

export default LatestContainer;
