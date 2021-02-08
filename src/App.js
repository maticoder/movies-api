import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";

import store from "./redux/store.js";

import Home from "./pages/Home/Home.jsx";
import Movie from "./pages/Movie/Movie.jsx";
import Popular from "./pages/Popular/Popular.js";
import Latest from "./pages/Latest/Latest.jsx";
import Info from "./pages/Info/Info.jsx";

import Drawer from "./components/Drawer/Drawer.jsx";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6769D2",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route
            render={({ location }) => (
              <Drawer>
                <AnimatePresence exitBeforeEnter={true}>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route path="/movie" component={Movie} />
                    <Route path="/popular" component={Popular} />
                    <Route path="/latest" component={Latest} />
                    <Route path="/info" component={Info} />
                  </Switch>
                </AnimatePresence>
              </Drawer>
            )}
          />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
