import React from "react";
import Destination from "../../includes/Destination";

const Homepage = () => {
  return (
    <>
      <div id="homeFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Discover yourself</h1>
            <h3>through our travel offers</h3>
          </div>
        </div>
        <div className="row parent">
          <div className="col-md-12">
            <div className="row row-1">
              <div className="col-md-2">
                <div className="select-div">
                  <select className="form-control">
                    <option value="One Way">One Way</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="From"
                />
              </div>

              <div className="col-md-2">
                <input type="text" className="form-control" placeholder="To" />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Departure"
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Arrival"
                />
              </div>
            </div>
            <div className="row row-2">
              <div className="col-md-2">
                <button type="submit" className="form-control">
                  SEARCH
                </button>
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option value="One Way">Economy</option>
                </select>
              </div>

              <div className="col-md-2">
                <select className="form-control">
                  <option value="One Way">Prefered Airline</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option value="One Way">Travellers</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homeSecondSection" className="container-fluid">
        <div className="row row-1">
          <div className="col-md-12">
            <h1>Popular Destinations</h1>
            <img src={require("../../../assets/img/dots.png")} alt="" />
          </div>
        </div>
        <div className="row row-2">
          <Destination
            image={require("../../../assets/img/2th.png")}
            Country="Australia"
            City="Sydney"
          />
          <Destination
            image={require("../../../assets/img/3th.png")}
            Country="Italy"
            City="Venice"
          />
          <Destination
            image={require("../../../assets/img/4th.png")}
            Country="France"
            City="Paris"
          />
        </div>
      </div>
      <div id="homeThirdSection" className="container-fluid">
        <div className="row parent">
          <div className="col-md-4">
            <img src={require("../../../assets/img/5th.png")} alt="" />
          </div>
          <div className="col-md-4 relative">
            <h1>Travel Tips</h1>
            <hr />
            <h2>
              What to take <br /> on mountain hiking <br /> day trips
            </h2>
            <p>
              You can easily be caught unawares <br />
              Little changes in our hiking packs <br /> could mean the
              difference between <br /> danger and escape...
            </p>
            <img src={require("../../../assets/img/arrow.png")} alt="" />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <img src={require("../../../assets/img/6th.png")} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center-1">
                <img
                  src={require("../../../assets/img/flyemirates.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12  center-2">
                <img src={require("../../../assets/img/dots1.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
