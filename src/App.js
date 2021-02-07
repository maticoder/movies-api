import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";

import Home from "./pages/Home/Home.jsx";
import Info from "./pages/Info/Info.jsx";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Drawer from "./components/Drawer/Drawer.jsx";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#68E1FD",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Fragment>
            <Drawer>
              <Route exact path="/" component={Dashboard} />
              <Route path="/popular" component={Dashboard} />
              <Route path="/info" component={Info} />
            </Drawer>
          </Fragment>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
