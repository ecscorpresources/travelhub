import React from "react";
import { Link } from "react-router-dom";
import "./CarRental.css";
import Pagination from "../../../pages/Homepage/Pagination";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import { Divider } from "@chakra-ui/core";

const CarRental = () => {
  return (
    <>
      <div id="carrentalFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Car Rental</h1>
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
              src={require("../../../../assets/img/58.png")}
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
                    <img
                      src={require("../../../../assets/img/36.png")}
                      alt=""
                    />
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
                <div>
                  <img
                    src={require("../../../../assets/img/80.png")}
                    alt=""
                    className="cruise"
                  />
                  <ul>
                    <li>
                      Nissan Almera <span>or Similar</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/90.png")}
                        alt=""
                      />{" "}
                      <span> 5 Passengers</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/91.png")}
                        alt=""
                      />
                      <span> 2 Large Suit Cases, 1 Small Suit Case</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/92.png")}
                        alt=""
                      />{" "}
                      <span> Automatic Transmission</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/93.png")}
                        alt=""
                      />{" "}
                      <span> Air Conditioning</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/94.png")}
                        alt=""
                      />
                      <span> 4 Doors</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/95.png")}
                        alt=""
                      />
                      <span> Rates Inclusions & Exclusions</span>
                    </li>
                  </ul>
                </div>
                <img src={require("../../../../assets/img/81.png")} alt="" />
              </div>
              <div className="col-md-4">
                <h4>Mediun Car</h4>
                <p>Per Day</p>
                <h2>USD 54.09</h2>
                <h3>NGN 19,580.58</h3>
                <Link to="mokhey">Reserve Vehicle</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div>
                  <img
                    src={require("../../../../assets/img/82.png")}
                    alt=""
                    className="cruise"
                  />
                  <ul>
                    <li>
                      Toyota Yaris <span>or Similar</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/90.png")}
                        alt=""
                      />
                      <span> 5 Passengers</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/91.png")}
                        alt=""
                      />
                      <span> 1 Large Suit Cases, 1 Small Suit Case</span>{" "}
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/92.png")}
                        alt=""
                      />
                      <span> Automatic Transmission</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/93.png")}
                        alt=""
                      />{" "}
                      <span> Air Conditioning</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/94.png")}
                        alt=""
                      />
                      <span> 4 Doors</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/95.png")}
                        alt=""
                      />
                      <span> Rates Inclusions & Exclusions</span>
                    </li>
                  </ul>
                </div>
                <img src={require("../../../../assets/img/83.png")} alt="" />
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
                <div>
                  <img
                    src={require("../../../../assets/img/84.png")}
                    alt=""
                    className="cruise"
                  />
                  <ul>
                    <li>
                      Toyota Quatom <span>or Similar</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/90.png")}
                        alt=""
                      />{" "}
                      <span> 8 Passengers</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/91.png")}
                        alt=""
                      />{" "}
                      <span> 3 Large Suit Cases, 1 Small Suit Case</span>{" "}
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/92.png")}
                        alt=""
                      />
                      <span> Manual Transmission</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/93.png")}
                        alt=""
                      />
                      <span> Air Conditioning</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/94.png")}
                        alt=""
                      />
                      <span> 3 Doors</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/95.png")}
                        alt=""
                      />
                      <span> Rates Inclusions & Exclusions</span>
                    </li>
                  </ul>
                </div>
                <img src={require("../../../../assets/img/85.png")} alt="" />
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
                <div>
                  <img
                    src={require("../../../../assets/img/86.png")}
                    alt=""
                    className="cruise"
                  />
                  <ul>
                    <li>
                      BMW Series 4 <span>or Similar</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/90.png")}
                        alt=""
                      />
                      <span> 4 Passengers</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/91.png")}
                        alt=""
                      />{" "}
                      <span> 2 Large Suit Cases, 1 Small Suit Case</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/92.png")}
                        alt=""
                      />
                      <span> Automatic Transmission</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/93.png")}
                        alt=""
                      />
                      <span> Air Conditioning</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/94.png")}
                        alt=""
                      />
                      <span> 2 Doors</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/95.png")}
                        alt=""
                      />
                      <span> Rates Inclusions & Exclusions</span>
                    </li>
                  </ul>
                </div>
                <img src={require("../../../../assets/img/87.png")} alt="" />
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
                <div>
                  <img
                    src={require("../../../../assets/img/88.png")}
                    alt=""
                    className="cruise"
                  />
                  <ul>
                    <li>
                      Nissan Almera <span>or Similar</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/90.png")}
                        alt=""
                      />{" "}
                      <span> 5 Passengers</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/91.png")}
                        alt=""
                      />{" "}
                      <span> 2 Large Suit Cases, 1 Small Suit Case</span>{" "}
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/92.png")}
                        alt=""
                      />{" "}
                      <span> Automatic Transmission</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/93.png")}
                        alt=""
                      />{" "}
                      <span> Air Conditioning</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/94.png")}
                        alt=""
                      />
                      <span> 4 Doors</span>
                    </li>
                    <li>
                      <img
                        src={require("../../../../assets/img/95.png")}
                        alt=""
                      />
                      <span> Rates Inclusions & Exclusions</span>
                    </li>
                  </ul>
                </div>
                <img src={require("../../../../assets/img/89.png")} alt="" />
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
