import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "./ImageReveal.scss";

function ImageReveal({ src, alt, height, imageTransition, coverTransition }) {
  return (
    <motion.div animate={{ visibility: "visible" }} className="imageReveal">
      <>
        <div className="imageReveal__container" style={{ height }}>
          <motion.img
            initial={{ scale: 1.6 }}
            animate={{ scale: 1 }}
            transition={imageTransition}
            src={src}
            alt={alt}
          />
          <motion.div
            animate={{ width: "0%" }}
            transition={coverTransition}
            className="imageReveal__cover"
          ></motion.div>
        </div>
      </>
    </motion.div>
  );
}

ImageReveal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageTransition: PropTypes.shape({
    delay: PropTypes.number,
    duration: PropTypes.number,
  }),
  coverTransition: PropTypes.shape({
    delay: PropTypes.number,
    duration: PropTypes.number,
  }),
};

export default ImageReveal;
