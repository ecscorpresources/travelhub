import React from "react";
import "../styles/resorthotels.scss";
import Pagination from "../components/Globals/Pagination/Pagination";
import HotelsResortsLodgesForm from "../components/Forms/HotelsResortsLodgesForm";
import HotelsResortsLodgeFilter from "../components/Forms/HotelsResortsLodgeFilter";
import ResortHotelsLodge from "../components/ResortHotels/ResortHotels";

const ResortHotels = (props) => {
  return (
    <>
      <div id="resorthotelsFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Hotels, Resorts and Lodges</h1>
          </div>
        </div>
      </div>
      <HotelsResortsLodgesForm />
      <div id="resorthotelsThirdSection" className="container-fluid">
        <div className="row parent">
          <HotelsResortsLodgeFilter />

          <div className="col-md-8">
            <ResortHotelsLodge />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResortHotels;
