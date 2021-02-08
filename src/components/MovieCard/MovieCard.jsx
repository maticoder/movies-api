import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { card } from "../../utils/animation.js";

import "./MovieCard.scss";

function MovieCard({ title }) {
  return (
    <motion.div
      variants={card}
      custom={Math.floor(Math.random() * 4) + 1}
      initial="enter"
      animate="animate"
      exit="exit"
      className="movieCard"
    >
      <p>{title}</p>
    </motion.div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
};

export default MovieCard;
