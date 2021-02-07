import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import HelpIcon from "@material-ui/icons/Help";

import Navbar from "../Navbar/Navbar.jsx";
import LinkItem from "../LinkItem/LinkItem.jsx";

import "./Drawer.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className="drawer">
      <CssBaseline />
      <Navbar />
      <Drawer
        className="drawer__sidebar"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className="drawer__container">
          <List>
            <LinkItem to="/" text="Home" icon={<HomeIcon />} />
            <LinkItem to="/popular" text="Popular" icon={<StarIcon />} />
            <LinkItem to="/latest" text="Latest" icon={<WatchLaterIcon />} />
            <LinkItem to="/top" text="Top rated" icon={<ThumbUpIcon />} />
          </List>
          <Divider />
          <List>
            <LinkItem to="/info" text="Info" icon={<HelpIcon />} />
          </List>
        </div>
      </Drawer>
      <main className="drawer__content">
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}

export default Sidebar;
