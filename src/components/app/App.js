import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagenav from "../includes/Pagenav";
import Homepage from "../pages/Homepage/Homepage";
import Footer from "../includes/Footer";
import { ThemeProvider } from "@chakra-ui/core";


function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Pagenav />
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
