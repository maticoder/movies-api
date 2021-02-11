import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, CssBaseline, Toolbar, List, Divider } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import HelpIcon from "@material-ui/icons/Help";

import Navbar from "../Navbar/Navbar.jsx";
import LinkItem from "../LinkItem/LinkItem.jsx";

import "./Sidebar.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Sidebar({ children }) {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <CssBaseline />
      <Navbar />
      <Drawer
        className="sidebar__drawer"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className="sidebar__container">
          <List>
            <LinkItem to="/" text="Home" icon={<HomeIcon />} />
            <LinkItem to="/popular" text="Popular" icon={<StarIcon />} />
            <LinkItem to="/latest" text="Latest" icon={<WatchLaterIcon />} />
            <LinkItem to="/top_rated" text="Top rated" icon={<ThumbUpIcon />} />
          </List>
          <Divider />
          <List>
            <LinkItem to="/info" text="Info" icon={<HelpIcon />} />
          </List>
        </div>
      </Drawer>
      <main className="sidebar__content">
        <Toolbar />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
