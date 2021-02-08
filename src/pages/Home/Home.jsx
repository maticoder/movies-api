import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import { ReactComponent as HomeImage } from "../../images/home.svg";
import { variants } from "../../utils/animation.js";

import "./Home.scss";

function Home() {
  return (
    <motion.div className="home">
      <motion.div className="home__content">
        <motion.h1
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
        >
          The best movie data over the world
        </motion.h1>
        <motion.p
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.1 }}
        >
          Moviezilla is the world's most popular and authoritative source for
          movie, TV and celebrity content. Find ratings and reviews for the
          newest movie and TV shows.
        </motion.p>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2 }}
        >
          <Button
            className="home__button"
            component={Link}
            to="/info"
            color="primary"
            variant="contained"
          >
            Start now
          </Button>
        </motion.div>
      </motion.div>
      <div className="home__icons">
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3 }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.4 }}
        >
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.5 }}
        >
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </motion.div>
      </div>
      <motion.div
        className="home__image"
        variants={variants}
        initial="enter"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6 }}
      >
        <HomeImage />
      </motion.div>
    </motion.div>
  );
}

export default Home;
