import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";

import store from "./redux/store.js";

import Home from "./pages/Home/Home.jsx";
import Popular from "./pages/Popular/Popular.js";
import Info from "./pages/Info/Info.jsx";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route
            render={({ location }) => (
              <Drawer>
                <AnimatePresence exitBeforeEnter={true}>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route path="/popular" component={Popular} />
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
