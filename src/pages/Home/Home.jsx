import React from "react";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import { ReactComponent as HomeImage } from "../../images/home.svg";

import Navbar from "../../components/Navbar/Navbar.jsx";

import "./Home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <div className="home container">
          <Grid container spacing={3}>
            <Grid className="home__grid" item sm={12} md={6}>
              <h1>The best movie data over the world</h1>
              <p>
                Moviezilla is the world's most popular and authoritative source
                for movie, TV and celebrity content. Find ratings and reviews
                for the newest movie and TV shows.
              </p>
              <Button
                className="home__button"
                color="primary"
                variant="contained"
              >
                Start now
              </Button>
              <div className="home__icons">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid className="home__grid" item sm={12} md={6}>
              <div className="image-container">
                <HomeImage />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Home;
