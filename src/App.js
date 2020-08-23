import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@chakra-ui/core";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Globals/Navbar";
import Footer from "./components/Globals/Footer";
import Spinner from "./components/Globals/Spinner";
const Homepage = lazy(() => import("./pages/homepage"));
const ResortsHotels = React.lazy(() => import("./pages/resortshotels"));
const ToursGuide = lazy(() => import("./pages/toursguides"));
const CarRental = lazy(() => import("./pages/carrental"));
const MainCruise = lazy(() => import("./pages/cruise"));

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Suspense fallback={<Spinner />}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/resorts_hotels" component={ResortsHotels} />
              <Route exact path="/tours_guides" component={ToursGuide} />
              <Route exact path="/car_rental" component={CarRental} />
              <Route exact path="/cruise" component={MainCruise} />
            </Switch>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
