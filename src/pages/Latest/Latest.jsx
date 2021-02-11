import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import { variants } from "../../utils/animation.js";

import MovieLayout from "../../components/MovieLayout/MovieLayout.jsx";

import "./Latest.scss";

function Latest({
  movie,
  getLatestMovie,
  loadPopularMovies,
  loader,
  buttonLoader,
}) {
  useEffect(() => {
    getLatestMovie();
  }, [getLatestMovie]);

  return <>{loader || !movie ? <Loader /> : <MovieLayout movie={movie} />}</>;
}

Latest.propTypes = {
  movie: PropTypes.shape({}),
  getLatestMovie: PropTypes.func,
  loadPopularMovies: PropTypes.func,
  loader: PropTypes.bool,
  buttonLoader: PropTypes.bool,
};

export default Latest;
