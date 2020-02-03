import React from "react";
import { Link } from "react-router-dom";
import "./CarRental.css";
import Pagination from "../../includes/Pagination/Pagination";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import { Divider } from "@chakra-ui/core";

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
            <img src={require("../../../assets/img/96.png")} alt="" />
            <p>Small Cars</p>
          </div>
          <div className="col-md-2">
            <img src={require("../../../assets/img/97.png")} alt="" />
            <p>Medium Cars</p>
          </div>
          <div className="col-md-2">
            <img src={require("../../../assets/img/98.png")} alt="" />
            <p>Buses</p>
          </div>
          <div className="col-md-2">
            <img src={require("../../../assets/img/99.png")} alt="" />
            <p>SUVs</p>
          </div>
          <div className="col-md-2">
            <img src={require("../../../assets/img/100.png")} alt="" />
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
          <div className="col-md-2">
            <h1>Filter Search</h1>
            <CheckboxGroup>
              <Divider className="first_divider" />
              <span>
                <IoIosArrowDown />
                Car Rental Brand
              </span>
              <Checkbox value="">Alamo</Checkbox>
              <Checkbox value="">Avis</Checkbox>
              <Checkbox value="">Budget</Checkbox>
              <Checkbox value="">Centauro</Checkbox>
              <Checkbox value="">Dollar</Checkbox>
              <Checkbox value="">Drive on Holidays</Checkbox>
              <Checkbox value="">Enterprise</Checkbox>
              <Checkbox value="">Europcar</Checkbox>
              <Checkbox value="">Firefly</Checkbox>
              <Checkbox value="">Goldcar</Checkbox>
              <Checkbox value="">Guerin</Checkbox>
              <Checkbox value="">Hertz</Checkbox>
              <Checkbox value="">Turisprime</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup>
              <Divider className="divider" />
              <span>
                <IoIosArrowDown />
                Car Specification
              </span>
              <Checkbox value="">Air Conditioning</Checkbox>
              <Checkbox value="">Automatic Transmission</Checkbox>
              <Checkbox value="">Manual Gearbox</Checkbox>
              <Checkbox value="">4+ Doors</Checkbox>
              <Checkbox value="">Diesel</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup>
              <Divider className="divider" />
              <span>
                <IoIosArrowDown />
                Fuel
              </span>
              <Checkbox value="">Petrol</Checkbox>
              <Checkbox value="">Diesel</Checkbox>
              <Checkbox value="">Hybrid</Checkbox>
            </CheckboxGroup>
          </div>
          <div className="col-md-9">
            <div className="row individual_row">
              <div className="col-md-8">
                <div className="container">
                  <img
                    src={require("../../../assets/img/80.png")}
                    alt=""
                    className="cruise"
                  />
                  <div>
                    <h1>
                      Nissan Almera <span>or Similar</span>
                    </h1>
                    <ul>
                      <li>
                        <img
                          src={require("../../../assets/img/90.png")}
                          alt=""
                        />
                        <span> 5 Passengers</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/91.png")}
                          alt=""
                        />
                        <span> 2 Large Suit Cases, 1 Small Suit Case</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/92.png")}
                          alt=""
                        />
                        <span>Automatic Transmission</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/93.png")}
                          alt=""
                        />
                        <span>Air Conditioning</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/94.png")}
                          alt=""
                        />
                        <span> 4 Doors</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/95.png")}
                          alt=""
                        />
                        <span> Rates Inclusions & Exclusions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={require("../../../assets/img/81.png")} alt="" />
              </div>
              <div className="col-md-4">
                <h4>Medium Car</h4>
                <p>Per Day</p>
                <h2>USD 54.09</h2>
                <h3>NGN 19,580.58</h3>
                <Link to="mokhey">Reserve Vehicle</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="container">
                  <img
                    src={require("../../../assets/img/82.png")}
                    alt=""
                    className="cruise"
                  />

                  <div>
                    <h1>
                      Toyota Yaris <span>or similar</span>{" "}
                    </h1>
                    <ul>
                      <li>
                        <img
                          src={require("../../../assets/img/90.png")}
                          alt=""
                        />
                        <span> 5 Passengers</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/91.png")}
                          alt=""
                        />
                        <span> 1 Large Suit Cases, 1 Small Suit Case</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/92.png")}
                          alt=""
                        />
                        <span> Automatic Transmission</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/93.png")}
                          alt=""
                        />
                        <span> Air Conditioning</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/94.png")}
                          alt=""
                        />
                        <span> 4 Doors</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/95.png")}
                          alt=""
                        />
                        <span> Rates Inclusions & Exclusions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={require("../../../assets/img/83.png")} alt="" />
              </div>
              <div className="col-md-4">
                <h4>Small Car</h4>
                <p>Per Day</p>
                <h2>USD 58.46</h2>
                <h3>NGN 21,162.25</h3>
                <Link to="mokhey">Reserve Vehicle</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="container">
                  <img
                    src={require("../../../assets/img/84.png")}
                    alt=""
                    className="cruise"
                  />
                  <div>
                    <h1>
                      Toyota Quatom <span>or Similar</span>
                    </h1>
                    <ul>
                      <li>
                        <img
                          src={require("../../../assets/img/90.png")}
                          alt=""
                        />
                        <span> 8 Passengers</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/91.png")}
                          alt=""
                        />
                        <span> 3 Large Suit Cases, 1 Small Suit Case</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/92.png")}
                          alt=""
                        />
                        <span> Manual Transmission</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/93.png")}
                          alt=""
                        />
                        <span> Air Conditioning</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/94.png")}
                          alt=""
                        />
                        <span> 3 Doors</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/95.png")}
                          alt=""
                        />
                        <span> Rates Inclusions & Exclusions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={require("../../../assets/img/85.png")} alt="" />
              </div>
              <div className="col-md-4">
                <h4>Bus</h4>
                <p>Per Day</p>
                <h2>USD 123.33</h2>
                <h3>NGN 44,645.46</h3>
                <Link to="mokhey">Reserve Vehicle</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="container">
                  <img
                    src={require("../../../assets/img/86.png")}
                    alt=""
                    className="cruise"
                  />
                  <div>
                    <h1>
                      {" "}
                      BMW Series 4 <span>or Similar</span>
                    </h1>
                    <ul>
                      <li>
                        <img
                          src={require("../../../assets/img/90.png")}
                          alt=""
                        />
                        <span> 4 Passengers</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/91.png")}
                          alt=""
                        />
                        <span> 2 Large Suit Cases, 1 Small Suit Case</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/92.png")}
                          alt=""
                        />
                        <span> Automatic Transmission</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/93.png")}
                          alt=""
                        />
                        <span> Air Conditioning</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/94.png")}
                          alt=""
                        />
                        <span> 2 Doors</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/95.png")}
                          alt=""
                        />
                        <span> Rates Inclusions & Exclusions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={require("../../../assets/img/87.png")} alt="" />
              </div>
              <div className="col-md-4">
                <h4>Luxury Cars</h4>
                <p>Per Day</p>
                <h2>USD 244.75</h2>
                <h3>NGN 88,599.50</h3>
                <Link to="mokhey">Reserve Vehicle</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="container">
                  <img
                    src={require("../../../assets/img/88.png")}
                    alt=""
                    className="cruise"
                  />
                  <div>
                    <h1>
                      Nissan Almera <span>or Similar</span>
                    </h1>
                    <ul>
                      <li>
                        <img
                          src={require("../../../assets/img/90.png")}
                          alt=""
                        />
                        <span> 5 Passengers</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/91.png")}
                          alt=""
                        />
                        <span> 2 Large Suit Cases, 1 Small Suit Case</span>{" "}
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/92.png")}
                          alt=""
                        />{" "}
                        <span> Automatic Transmission</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/93.png")}
                          alt=""
                        />
                        <span> Air Conditioning</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/94.png")}
                          alt=""
                        />
                        <span> 4 Doors</span>
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/img/95.png")}
                          alt=""
                        />
                        <span> Rates Inclusions & Exclusions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={require("../../../assets/img/89.png")} alt="" />
              </div>
              <div className="col-md-4">
                <h4>SUV</h4>
                <p>Per Day</p>
                <h2>USD 59.67</h2>
                <h3>NGN 21,600.54</h3>
                <Link to="mokhey">Reserve Vehicle</Link>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRental;
