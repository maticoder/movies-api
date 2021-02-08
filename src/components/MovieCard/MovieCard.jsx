import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { card } from "../../utils/animation.js";

import "./MovieCard.scss";

function MovieCard({ vote, title, date, description, poster }) {
  return (
    <motion.div
      variants={card}
      custom={Math.floor(Math.random() * 4) + 1}
      initial="enter"
      animate="animate"
      exit="exit"
      className="movieCard"
    >
      <div className="movieCard__content">
        <Card className="movieCard__root">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className="movieCard__avatar">
                {vote}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title.substring(0, 30)}
            subheader={moment(date).format("MMMM DD, YYYY")}
          />
          <div className="movieCard__media">
            <CardMedia
              image={`https://image.tmdb.org/t/p/w500${poster}`}
              // image="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
              title="Paella dish"
            />
          </div>
          <CardContent>
            <div className="movieCard__description">
              {description.length < 200
                ? description
                : description.substring(0, 200) + "..."}
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. */}
              {/* {description.substring(0, 200)} */}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton className="movieCard__like" aria-label="like">
              <ThumbUpIcon />
            </IconButton>
          </CardActions>
        </Card>
        {/* <p>{title}</p> */}
      </div>
    </motion.div>
  );
}

MovieCard.propTypes = {
  vote: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  poster: PropTypes.string,
};

export default MovieCard;
