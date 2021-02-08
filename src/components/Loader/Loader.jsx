import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";

import animationData from "../../data/cat.json";
import { appear } from "../../utils/animation.js";

import "./Loader.scss";

function Loader() {
  const loader = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: loader.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <motion.div
      variants={appear}
      initial="enter"
      animate="animate"
      exit="exit"
      className="loader"
    >
      <div ref={loader} />
      <p className="paragraph loader__text">
        This cat is working really hard in order to help you collect your movies
      </p>
    </motion.div>
  );
}

export default Loader;
