import React from "react";
import { Link } from "react-router-dom";
import CruiseForm from "../Forms/Cruise";

const Cruise = () => {
  return (
    <>
      <div id="cruiseFirstSection" className="container-fluid">
        <div className="row">
          <CruiseForm />
        </div>
        <div className="row">
          <div className="col-md-4">
            <h1>5 Night Cruise</h1>
            <p>to the Bahamas</p>
            <span>22/02/2020</span>
            <div>
              <ul>
                <li>
                  <img
                    src={require("../../assets/img/cruise/36.png")}
                    alt="cruise"
                  />
                  MSC Cruises
                </li>
                <li>
                  <Link to="monhkey">VIEW DETAILS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <h1>33% off</h1>
            <p>3 NIGHTS CRUISE TO HAWAII</p>
            <div>
              <ul>
                <li>
                  <img
                    src={require("../../assets/img/cruise/37.png")}
                    alt="cruise"
                  />
                </li>
                <li>
                  <Link to="monhkey">VIEW DETAILS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row finance">
          <div className="col-md-12 finance">
            <h1>Finance Your Next Cruise Vacation With Rabar Credit</h1>
            <Link to="monhkey">VIEW DETAILS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cruise;
