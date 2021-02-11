import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "./TextReveal.scss";

function TextReveal({ text, duration, className }) {
  const [end, setEnd] = useState(false);

  return (
    <span className={`textReveal ${className}`}>
      <span className="textReveal__text">{text}</span>
      <motion.span
        animate={{ width: "0%" }}
        transition={{ delay: duration }}
        className="textReveal__coverWhite"
      ></motion.span>
      <motion.span
        onAnimationComplete={() => setEnd(true)}
        animate={{
          width: !end ? "100%" : "0%",
        }}
        transition={{ duration: duration }}
        className={`textReveal__coverGray textReveal__coverGray--${
          !end ? "left" : "right"
        }`}
      ></motion.span>
    </span>
  );
}

TextReveal.propTypes = {
  text: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default TextReveal;
