import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import MovieLayout from "../../components/MovieLayout/MovieLayout.jsx";

import Loader from "../../components/Loader/Loader.jsx";

import "./Movie.scss";

function Movie({ movie, loader, getMovie }) {
  const { id } = useParams();

  useEffect(() => {
    getMovie(id);
  }, [id, getMovie]);

  return <>{loader || !movie ? <Loader /> : <MovieLayout movie={movie} />}</>;
}

Movie.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({})),
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    popularity: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, iso_639_1: PropTypes.string })
    ),
    imdb_id: PropTypes.string,
  }),
  loader: PropTypes.bool,
  getMovie: PropTypes.func,
};

export default Movie;
