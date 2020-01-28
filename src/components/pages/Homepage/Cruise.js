import React from "react";
import { Link } from "react-router-dom";

const Cruise = () => {
  return (
    <>
      <div id="cruiseFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12 inputs ">
            <form>
              <select className="sail_to">
                <option value="Sail To">Sail To</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              <select className="sail_from">
                <option value="Sail From">Sail From</option>
                <option value="Canada">Canada</option>
              </select>
              <input type="date" placeholder="Departure" />
              <select className="departure">
                <option value="Duration">Duration</option>
                <option value="24days">24days</option>
              </select>
              <button type="submit">FIND A TOUR GUIDE</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h1>5 Night Cruise</h1>
            <p>to the Bahamas</p>
            <span>22/02/2020</span>
            <div>
              <ul>
                <li>
                  <img src={require("../../../assets/img/36.png")} alt="" />
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
                  <img src={require("../../../assets/img/37.png")} alt="" />
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
