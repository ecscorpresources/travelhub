import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

class ToursGuidesFilter extends Component {
  render() {
    return (
      <>
        <div className="col-md-2 column_1">
          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/70.png")}
                alt=""
              />
              <h3>All Tours</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/71.png")}
                alt=""
              />
              <h3>City Tours</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/72.png")}
                alt=""
              />
              <h3>Museum Tours</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/73.png")}
                alt=""
              />
              <h3>Nature Tours</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/74.png")}
                alt=""
              />
              <h3>Nature Tours</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/75.png")}
                alt=""
              />
              <h3>Walk Tours</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../assets/img/toursandguides/76.png")}
                alt=""
              />
              <h3>Eat & Drink Tours</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 accessible">
              <ul>
                <li>
                  <img
                    src={require("../../assets/img/toursandguides/77.png")}
                    alt=""
                  />
                </li>
                <li>Allowed For Disabled</li>
              </ul>
              {/* <hr className="accessible" /> */}
              <ul>
                <li>
                  <img
                    src={require("../../assets/img/toursandguides/78.png")}
                    alt=""
                  />
                </li>
                <li>Allowed For Groups</li>
              </ul>
              {/* <hr className="accessible" /> */}
              <ul>
                <li>
                  <img
                    src={require("../../assets/img/toursandguides/79.png")}
                    alt=""
                  />
                </li>
                <li>Allowed For Pets</li>
              </ul>
            </div>
          </div>
          <hr />
          <CheckboxGroup>
            <span>
              <IoIosArrowDown />
              Carbin Type
            </span>
            <Checkbox value="Inside">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </Checkbox>
            <Checkbox value="Outside">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </Checkbox>
            <Checkbox value="Balcony">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </Checkbox>
            <Checkbox value="Suite">
              <IoMdStar />
              <IoMdStar />
            </Checkbox>
            <Checkbox value="Suite">
              <IoMdStar />
            </Checkbox>
          </CheckboxGroup>
        </div>
      </>
    );
  }
}

export default ToursGuidesFilter;
