import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import { variants } from "../../utils/animation.js";

import "./Popular.scss";

function Popular({
  movies,
  getPopularMovies,
  loadPopularMovies,
  loader,
  buttonLoader,
}) {
  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="popular">
          <motion.h1
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="header popular__header"
          >
            Popular
          </motion.h1>
          <motion.p
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="paragraph popular__paragraph"
          >
            The most popular movies over the world
          </motion.p>
          <div className="popular__content">
            {/* the movie.id is not uniqe, this is the how the endpoint works, so I decided to use the index as a key instead of the id */}
            {movies.map((movie, index) => (
              <MovieCard
                id={movie.id}
                key={index}
                title={movie.original_title}
                vote={movie.vote_average}
                date={movie.release_date}
                description={movie.overview}
                poster={movie.poster_path}
              />
            ))}
          </div>
          <motion.div
            className="popular__load"
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
          >
            <Button
              color="primary"
              variant="contained"
              onClick={() => loadPopularMovies()}
              disabled={buttonLoader}
            >
              Load more
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
}

Popular.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  getPopularMovies: PropTypes.func,
  loadPopularMovies: PropTypes.func,
  loader: PropTypes.bool,
  buttonLoader: PropTypes.bool,
};

export default Popular;
