import React from "react";
import { Link } from "react-router-dom";
import "../styles/carrental.scss";
import Pagination from "../components/Globals/Pagination/Pagination";
import CarRentalFilter from "../components/Forms/CarRentalFilter";
import Cars from "../components/Cars/Cars";

const CarRental = () => {
  return (
    <>
      <div id="carrentalFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-11">
            <h1>Car Rentals</h1>
            <div className="first_div">
              <span>Itinerary</span> <Link to="monkhey">Edit</Link>
            </div>
            <div className="second_div">
              <ul>
                <li>
                  Pick Up:
                  <span> Brownsville South Padre International Airport</span>
                </li>
                <li>
                  Drop off:
                  <span> Brownsville South Padre International Airport</span>
                </li>
              </ul>
              <ul>
                <li>
                  Pick Up Date: <span>Wed 19, Jan 2020 at 13:00</span>
                </li>
                <li>
                  Drop off Date: <span>Mon, 03 Feb, 2020 at 13:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="carrentalCarsSection" className="container-fluid">
        <div className="row row_1">
          <div className="col-md-8">
            <ul>
              <li>Itinerary</li>
              <li>Choose Vehicle</li>
              <li>Choose Extras</li>
              <li>Review And Book</li>
            </ul>
          </div>
        </div>
        <div className="row row_2">
          <div className="col-md-2">
            <img src={require("../assets/img/96.png")} alt="" />
            <p>Small Cars</p>
          </div>
          <div className="col-md-2">
            <img src={require("../assets/img/97.png")} alt="" />
            <p>Medium Cars</p>
          </div>
          <div className="col-md-2">
            <img src={require("../assets/img/98.png")} alt="" />
            <p>Buses</p>
          </div>
          <div className="col-md-2">
            <img src={require("../assets/img/99.png")} alt="" />
            <p>SUVs</p>
          </div>
          <div className="col-md-2">
            <img src={require("../assets/img/100.png")} alt="" />
            <p>Luxury Cars</p>
          </div>
        </div>
      </div>
      <div id="carrentalSecondSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Link to="monkhey">VIEW ON MAP</Link>
          </div>
        </div>
        <div className="row parent">
          <CarRentalFilter />
          <div className="col-md-9">
            <Cars />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRental;
