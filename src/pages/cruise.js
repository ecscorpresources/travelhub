import React from "react";
import { Link } from "react-router-dom";
import "../styles/maincruise.scss";
import Pagination from "../components/Globals/Pagination/Pagination";
import CruiseFilter from "../components/Forms/CruiseFilter";
import Cruises from "../components/Cruise/Cruises";
import SearchCruise from "../components/Forms/SearchCruise";

const Cruise = () => {
  return (
    <>
      <div id="maincruiseFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Cruise</h1>
          </div>
        </div>
        <div className="row">
          <SearchCruise />
          <div className="col-md-8">
            <img
              src={require("../assets/img/58.png")}
              alt=""
              className="ship img-fluid"
            />

            <div className="white_box">
              <h2>5 Night Cruise</h2>
              <p>to the Bahamas</p>
              <span>22/02/2020</span>
              <div>
                <ul>
                  <li>
                    <img src={require("../assets/img/36.png")} alt="" />
                    MSC Cruises
                  </li>
                  <li>
                    <Link to="monhkey">VIEW DETAILS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="maincruiseSecondSection" className="container-fluid">
        <div className="row parent">
          <CruiseFilter />
          <div className="col-md-9">
            <Cruises />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cruise;
