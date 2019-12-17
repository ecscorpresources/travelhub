import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagenav from "../includes/Pagenav";

function App() {
  return (
    <>
      <Router>
        <Pagenav />
      </Router>
    </>
  );
}

export default App;
