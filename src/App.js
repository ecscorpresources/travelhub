import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@chakra-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Globals/Navbar";
import Footer from "./components/Globals/Footer";
import Spinner from "./components/Globals/Spinner";
const Homepage = lazy(() => import("./pages/homepage"));
const Resortshotels = React.lazy(() => import("./pages/resortshotels"));
const Toursguide = lazy(() => import("./pages/toursguides"));
const Carrental = lazy(() => import("./pages/carrental"));
const Cruise = lazy(() => import("./pages/cruise"));

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Suspense fallback={<Spinner />}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/resortshotels" component={Resortshotels} />
              <Route exact path="/toursguides" component={Toursguide} />
              <Route exact path="/carrentals" component={Carrental} />
              <Route exact path="/cruise" component={Cruise} />
            </Switch>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
