import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

function LinkItem({ to, text, icon }) {
  return (
    <Link to={to}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
}

LinkItem.defaultProps = {
  to: "/",
  exact: false,
};

LinkItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default LinkItem;
