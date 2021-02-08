import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { variants } from "../../utils/animation.js";

function Movie() {
  return (
    <div className="movie">
      <motion.h1
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        className="header"
      >
        Movie here
      </motion.h1>
      <motion.p
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2 }}
        className="paragraph"
      >
        Something about the movie
      </motion.p>
    </div>
  );
}

Movie.propTypes = {};

export default Movie;
