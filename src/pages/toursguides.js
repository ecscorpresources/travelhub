import React from "react";
import { Link } from "react-router-dom";
import "../styles/toursguide.scss";
import Pagination from "../components/Globals/Pagination/Pagination";
import { TiArrowSortedDown } from "react-icons/ti";
import ToursGuidesFilter from "../components/Forms/ToursGuidesFilter";
import FindTours from "../components/Forms/FindTours";
import Tours from "../components/Tours/Tours";
import GuidesForm from "../components/Forms/GuidesForm";
import Guides from "../components/Guides";

const ToursGuide = () => {
  return (
    <>
      <div id="tourguideFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Tours & Guides</h1>
          </div>
        </div>
      </div>
      <div id="tourguideSecondSection" className="container-fluid">
        <div className="row first">
          <FindTours />
        </div>
      </div>
      <div id="tourguidemapSection">
        <div className="row">
          <div className="col-md-10">
            <hr />
            <TiArrowSortedDown />
          </div>
        </div>
      </div>
      <div id="tourguideThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Link to="monkhey">VIEW ON MAP</Link>
          </div>
        </div>
        <div className="row parent">
          <ToursGuidesFilter />
          <div className="col-md-8">
            <Tours />
            <Pagination />
          </div>
        </div>
      </div>

      <GuidesForm />
      <Guides />
    </>
  );
};

export default ToursGuide;
