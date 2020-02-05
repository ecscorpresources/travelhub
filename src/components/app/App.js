import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@chakra-ui/core";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../includes/Navbar";
import Spinner from "../includes/Spinner";
const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Footer = lazy(() => import("../includes/Footer"));
const ResortHotels = React.lazy(() =>
  import("../pages/ResortHotels/ResortHotels")
);
const ToursGuide = lazy(() => import("../pages/ToursGuide/ToursGuide"));
const CarRental = lazy(() => import("../pages/CarRentals/CarRental"));
const MainCruise = lazy(() => import("../pages/Cruise/MainCruise"));

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Suspense fallback={<Spinner />}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/resorts_hotels" component={ResortHotels} />
              <Route path="/tours_guides" component={ToursGuide} />
              <Route path="/car_rental" component={CarRental} />
              <Route path="/cruise" component={MainCruise} />
            </Switch>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
