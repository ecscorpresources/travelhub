import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../includes/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import Footer from "../includes/Footer";
import { ThemeProvider } from "@chakra-ui/core";
import ResortHotels from "../pages/ResortHotels/ResortHotels";
import ToursGuide from "../pages/ToursGuide/ToursGuide";
import CarRental from "../pages/CarRentals/CarRental";
import MainCruise from "../pages/Cruise/MainCruise";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/resorts_hotels" component={ResortHotels} />
            <Route path="/tours_guides" component={ToursGuide} />
            <Route path="/car_rental" component={CarRental} />
            <Route path="/cruise" component={MainCruise} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
