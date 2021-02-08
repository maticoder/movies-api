import React from "react";
import { motion } from "framer-motion";

import { variants } from "../../utils/animation.js";

import "./Info.scss";

function Info() {
  return (
    <div className="info">
      <motion.h1
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
      >
        Info
      </motion.h1>
      <motion.div
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2 }}
        className="info__content"
      >
        <h3 className="info__header">Description</h3>
        <p>
          This is a simple React application called Moviezilla. The main purpose
          of this application is to freely check the most popular and the top
          rated movies. The users of this application are able to change the
          routes using the sidebar on the left side of the screen. There are
          three main options in the sidebar
        </p>
      </motion.div>
      <motion.div
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4 }}
        className="info__content"
      >
        <h3 className="info__header">Main functionalities</h3>
        <ul className="info__list">
          <li className="info__list__item">
            Popular - a list of the current popular movies, the list updates
            daily
          </li>
          <li className="info__list__item">
            Latest - the mose newly created movies, this is the live response
            and will continuously change
          </li>
          <li className="info__list__item">
            Top rated - a list of the top rated movies base on the users opinion
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6 }}
        className="info__content"
      >
        <h3 className="info__header">About the movies</h3>
        <p>
          You can also check the particular movies, the description of the movie
          contains
        </p>
        <ul className="info__list">
          <li className="info__list__item">Popular</li>
          <li className="info__list__item">Latest</li>
          <li className="info__list__item">Top rated</li>
        </ul>
      </motion.div>
      <motion.div
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.8 }}
        className="info__content"
      >
        <h3 className="info__header">The tech stack</h3>
        <ul className="info__list">
          <li className="info__list__item">React</li>
          <li className="info__list__item">React Redux</li>
          <li className="info__list__item">React router</li>
          <li className="info__list__item">Axios</li>
          <li className="info__list__item">Framer</li>
          <li className="info__list__item">The movie databse API</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Info;
