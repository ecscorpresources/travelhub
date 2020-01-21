import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="homeFooterSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row parent">
              <div className="col-md-3">
                <ul>
                  <li>Get AWay</li>
                  <li>
                    <Link to="monkhey">Flight Bookings</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Hotel Bookings</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Car Rentals</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Tour Packages</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <ul>
                  <li>Have A Peek</li>
                  <li>
                    <Link to="monkhey">About Us</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Travel Tips</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Insurance</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <ul>
                  <li>Have A Question ?</li>
                  <li>
                    <Link to="monkhey">How to book</Link>
                  </li>
                  <li>
                    <Link to="monkhey">FAQs</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Contact</Link>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <Link to="monkhey">
                      <img src={require("../../assets/img/1cth.png")} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img src={require("../../assets/img/2cth.png")} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img src={require("../../assets/img/3cth.png")} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img src={require("../../assets/img/4cth.png")} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img src={require("../../assets/img/5cth.png")} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-12">
                <p>Copyright 2020 TravelHub. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
