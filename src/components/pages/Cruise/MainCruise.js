import React from "react";
import { Link } from "react-router-dom";
import "./MainCruise.css";
import Pagination from "../../includes/Pagination/Pagination";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import { Divider } from "@chakra-ui/core";

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
              className="ship img-fluid"
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
            <h1>Filter Search</h1>
            <CheckboxGroup>
              <Divider className="first_divider" />
              <span>
                <IoIosArrowDown />
                Carbin Type
              </span>
              <Checkbox value="Inside">Inside</Checkbox>
              <Checkbox value="Outside">Outside</Checkbox>
              <Checkbox value="Balcony">Balcony</Checkbox>
              <Checkbox value="Suite">Suite</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup>
              <Divider className="divider" />
              <span>
                <IoIosArrowDown />
                Cruise Style
              </span>
              <Checkbox value="Family">Family</Checkbox>
              <Checkbox value="Fitness Cruise">Fitness Cruise</Checkbox>
              <Checkbox value="Gourmet Food Cruise">
                Gourmet Food Cruise
              </Checkbox>
              <Checkbox value="Luxury Cruise">Luxury Cruise</Checkbox>
              <Checkbox value="River Cruise">River Cruise</Checkbox>
              <Checkbox value="Romantic Cruise">Romantic Cruise</Checkbox>
              <Checkbox value="Senior Cruise">Senior Cruise</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup>
              <Divider className="divider" />
              <span>
                <IoIosArrowDown />
                Price Range
              </span>
              <Checkbox value="">$0 - $1,000</Checkbox>
              <Checkbox value="">$1,001 - $2,000</Checkbox>
              <Checkbox value="">$2,000 - $3,000</Checkbox>
              <Checkbox value="">$3,001 - $4,000</Checkbox>
              <Checkbox value="">$4001 - $5,000</Checkbox>
              <Checkbox value="">$5,000 + </Checkbox>
            </CheckboxGroup>
            <CheckboxGroup>
              <Divider className="divider" />
              <span>
                <IoIosArrowDown />
                Cruise Length
              </span>
              <Checkbox value="">1 - 2 Days</Checkbox>
              <Checkbox value="">3 - 5 Days</Checkbox>
              <Checkbox value="">6 - 9 Days</Checkbox>
              <Checkbox value="">10 - 14 Days</Checkbox>
              <Checkbox value="">15 + Days</Checkbox>
            </CheckboxGroup>
          </div>
          <div className="col-md-9">
            <div className="row individual_row">
              <div className="col-md-8">
                <h1>
                  7-Night Asia and Asia Pacific Cruise from Ho Chi Minh City
                </h1>
                <div>
                  <img
                    src={require("../../../assets/img/59.png")}
                    alt=""
                    className="cruise img-fluid"
                  />
                  <ul>
                    <li>Embark - Ho Chin Minh</li>
                    <li>Disembark - Kampong, Cham</li>
                    <li>
                      <img
                        src={require("../../../assets/img/60.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <span>AmaWaterways, AmaDara</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/img/61.png")}
                  alt=""
                  className="img-fluid"
                />
                <p>Per Person</p>
                <h2>USD 2,100</h2>
                <h3>NGN 760, 200</h3>
                <Link to="mokhey">Book Cruise</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <h1>9 Night Rio To Buenos Aires Voyage</h1>
                <div>
                  <img
                    src={require("../../../assets/img/62.png")}
                    alt=""
                    className="cruise img-fluid"
                  />
                  <ul>
                    <li>Embark - Rio De Janneiro, Brazil</li>
                    <li>Disembark - Buenos Aire Voyage, Brazil</li>
                    <li>
                      <img
                        src={require("../../../assets/img/60.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <span>Amazara, Quest</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/img/63.png")}
                  alt=""
                  className="img-fluid"
                />
                <p>Per Person</p>
                <h2>USD 1749.09</h2>
                <h3>NGN 649,460.58</h3>
                <Link to="mokhey">Book Cruise</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <h1>17 CapeTown to Southampton</h1>
                <div>
                  <img
                    src={require("../../../assets/img/64.png")}
                    alt=""
                    className="cruise img-fluid"
                  />
                  <ul>
                    <li>Embark - Capetown, South Africa</li>
                    <li>Disembark - Southampton, England, UK</li>
                    <li>
                      <img
                        src={require("../../../assets/img/60.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <span>AmaWaterways, AmaBella</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/img/65.png")}
                  alt=""
                  className="img-fluid"
                />
                <p>Per Person</p>
                <h2>USD 2166.63</h2>
                <h3>NGN 784,320,06</h3>
                <Link to="mokhey">Book Cruise</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <h1>2-Night Bahamas Cruise from Miami</h1>
                <div>
                  <img
                    src={require("../../../assets/img/66.png")}
                    alt=""
                    className="cruise img-fluid"
                  />
                  <ul>
                    <li>Embark - Miami, USA</li>
                    <li>Disembark - Miama, USA</li>
                    <li>
                      <img
                        src={require("../../../assets/img/60.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <span>Carnival, Conquest</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/img/67.png")}
                  alt=""
                  className="img-fluid"
                />
                <p>Per Person</p>
                <h2>USD 184</h2>
                <h3>NGN 66, 608</h3>
                <Link to="mokhey">Book Cruise</Link>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <h1>17 Capetown to Southampton</h1>
                <div>
                  <img
                    src={require("../../../assets/img/68.png")}
                    alt=""
                    className="cruise img-fluid"
                  />
                  <ul>
                    <li>Embark - Genoa, Italy</li>
                    <li>Disembark - Barcelona, Spain</li>
                    <li>
                      <img
                        src={require("../../../assets/img/60.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <span>MSC Cruise, Divina</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/img/69.png")}
                  alt=""
                  className="img-fluid"
                />
                <p>Per Person</p>
                <h2>USD 438</h2>
                <h3>NGN 158, 556</h3>
                <Link to="mokhey">Book Cruise</Link>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCruise;
