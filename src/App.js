import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home.jsx";
import Popular from "./pages/Popular/Popular.jsx";
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
    //     <Route
    //     render={({ location }) => (
    //         <AnimatePresence exitBeforeEnter>
    //             <Switch location={location} key={location.pathname}>
    //                 <Route exact path='/' component={Landing} />
    //                 <Route
    //                     exact
    //                     path='/model/:id'
    //                     render={() => <Model />}
    //                 />
    //             </Switch>
    //         </AnimatePresence>
    //     )}
    // />
    <Router>
      <ThemeProvider theme={theme}>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter={true}>
              <Switch location={location} key={location.pathname}>
                <Drawer>
                  <Route exact path="/" component={Home} />
                  <Route path="/popular" component={Popular} />
                  <Route path="/info" component={Info} />
                </Drawer>
              </Switch>
            </AnimatePresence>
          )}
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
