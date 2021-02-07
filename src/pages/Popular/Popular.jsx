import React from "react";

function Popular({ movies, getPopularMovies }) {
  return (
    <div className="popular">
      <h1 className="header">Popular</h1>
      <p className="paragraph">The most popular movies over the world</p>
      {movies.map((movie) => (
        <p>{movie}</p>
      ))}
      <button onClick={getPopularMovies}>Klik</button>
    </div>
  );
}

export default Popular;
