import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import { variants } from "../../utils/animation.js";

import "./Popular.scss";

function Popular({ movies, getPopularMovies, loader }) {
  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="popular">
          <motion.h1
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="header"
          >
            Popular
          </motion.h1>
          <motion.p
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="paragraph"
          >
            The most popular movies over the world
          </motion.p>
          <div className="popular__content">
            {movies.map((movie) => (
              <MovieCard key={movie.id} title={movie.original_title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Popular.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  getPopularMovies: PropTypes.func,
};

export default Popular;
