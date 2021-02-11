import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import { variants } from "../../utils/animation.js";

import "./TopRated.scss";

function TopRated({
  movies,
  getTopRatedMovies,
  loadTopRatedMovies,
  loader,
  buttonLoader,
}) {
  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="topRated">
          <motion.h1
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="header topRated__header"
          >
            Top rated
          </motion.h1>
          <motion.p
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="paragraph topRated__paragraph"
          >
            The top rated movies over the world
          </motion.p>
          <div className="topRated__content">
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
            className="topRated__load"
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
          >
            <Button
              color="primary"
              variant="contained"
              onClick={() => loadTopRatedMovies()}
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

TopRated.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  getTopRatedMovies: PropTypes.func,
  loadTopRatedMovies: PropTypes.func,
  loader: PropTypes.bool,
  buttonLoader: PropTypes.bool,
};

export default TopRated;
