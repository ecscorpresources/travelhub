import React from "react";
import { Link } from "react-router-dom";
import "./MainCruise.css";
import CheckboxColumn from "../Homepage/CheckboxColumn";

const MainCruise = () => {
  return (
    <>
      <div id="maincruiseFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Cruise</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <span className="cruise">Cruise Itinerary</span>
            <Link to="monkhey">Edit</Link>
            <ul>
              <li>
                <span>Destination</span> : <span>Caribean Eastern</span>
              </li>
              <li>
                <span>Departure</span> : <span>Hawaii</span>
              </li>
              <li>
                <span>Date</span> : <span> April 2020</span>
              </li>
              <li>
                <span>Duration</span> : <span>6 - 9 Days</span>
              </li>
            </ul>
            <form>
              <select>
                <option value="Cruise Line">Cruise Line</option>
              </select>
              <select>
                <option value="Cruise Ship">Cruise Ship</option>
              </select>
              <button type="submit">SEARCH CRUISE</button>
            </form>
          </div>
          <div className="col-md-8">
            <img
              src={require("../../../assets/img/58.png")}
              alt=""
              className="ship"
            />

            <div className="white_box">
              <h2>5 Night Cruise</h2>
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
          </div>
        </div>
      </div>
      <div id="maincruiseSecondSection" className="container-fluid">
        <div className="row parent">
          <div className="col-md-2">
            <CheckboxColumn />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-8">
                <h1>
                  7-Night Asia and Asia Pacific Cruise from Ho Chi Minh City
                </h1>
                <div>
                  <img src={require("../../../assets/img/59.png")} alt="" />
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCruise;
