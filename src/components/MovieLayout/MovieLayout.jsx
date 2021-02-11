import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import moment from "moment";

import TextReveal from "../TextReveal/TextReveal.jsx";
import ImageReveal from "../ImageReveal/ImageReveal.jsx";

import { variants } from "../../utils/animation.js";

import "./MovieLayout.scss";

function MovieLayout({ movie }) {
  return (
    <motion.div exit={{ opacity: 0 }} className="movieLayout">
      <div className="movieLayout__info">
        <TextReveal
          text={moment(movie.release_date).format("MMMM DD, YYYY")}
          duration={1.4}
          className="movieLayout__date"
        />
        <TextReveal
          text={movie.genres[0]?.name}
          duration={1.4}
          className="movieLayout__genre"
        />
      </div>
      <ImageReveal
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt="movie"
        height="30vw"
        imageTransition={{ delay: -0.2, duration: 1.4 }}
        coverTransition={{ delay: 1.4, duration: 1.4 }}
      />
      <div className="movieLayout__header">
        <div>
          <TextReveal
            text={movie.original_title}
            duration={1.4}
            className="movieLayout__title"
          />
        </div>
        <div>
          <TextReveal
            text={movie.tagline}
            duration={1.4}
            className="movieLayout__tagline"
          />
        </div>
      </div>
      <div className="movieLayout__content">
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          transition={{ delay: 3, duration: 1 }}
          className="movieLayout__poster"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          transition={{ delay: 3, duration: 1 }}
          className="movieLayout__overview"
        >
          <div className="movieLayout__description">{movie.overview}</div>
          <div className="movieLayout__rates">
            <div>
              <h1 className="header">{movie.vote_average}</h1>
              <p className="paragraph">Vote average</p>
            </div>
            <div>
              <h1 className="header">{movie.vote_count}</h1>
              <p className="paragraph">Vote count</p>
            </div>
            <div>
              <h1 className="header">{movie.popularity.toFixed(2)}</h1>
              <p className="paragraph">Popularity</p>
            </div>
          </div>
          <div className="movieLayout__values">
            <div className="movieLayout__value">
              <div>Budget</div>
              <div>${movie.budget}</div>
            </div>
            <div className="movieLayout__value">
              <div>Revenue</div>
              <div>${movie.revenue}</div>
            </div>
            <div className="movieLayout__value">
              <div>Runtime</div>
              <div>{movie.runtime} min</div>
            </div>
          </div>
          <div className="movieLayout__production">
            <p className="paragraph">Production countries</p>
            {movie.production_countries.map((country, index) => (
              <div key={index}>{country.name}</div>
            ))}
          </div>
          <div className="movieLayout__link">
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              Imdb link
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

MovieLayout.propTypes = {
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
      PropTypes.shape({ name: PropTypes.string })
    ),
    imdb_id: PropTypes.string,
  }),
};

export default MovieLayout;
