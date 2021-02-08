import React from "react";
import PropTypes from "prop-types";

function MovieCard({ title }) {
  return <p>{title}</p>;
}

MovieCard.propTypes = {
  title: PropTypes.string,
};

export default MovieCard;
