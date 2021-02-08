import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";

function Popular({ movies, getPopularMovies }) {
  return (
    <div className="popular">
      <h1 className="header">Popular</h1>
      <p className="paragraph">The most popular movies over the world</p>
      {movies.map((movie) => (
        <MovieCard title={movie} />
      ))}
      {process.env.REACT_APP_API_KEY}
      <button onClick={getPopularMovies}>Klik</button>
    </div>
  );
}

Popular.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  getPopularMovies: PropTypes.func,
};

export default Popular;
