import React from "react";
import "./ResortHotels.css";
import { Checkbox } from "@chakra-ui/core";
import HotelReservation from "../Homepage/HotelReservation";
import CheckboxColumn from "../../includes/CheckboxColumn";
import Pagination from "../../includes/Pagination/Pagination";

const booking_2 = (
  <>
    Situated in a quiet alpine setting, Timber Haven Lodge is <br /> located in
    a Big Bear Lake, California. An outdoor hot tub, <br /> table tennis and
    free Wifi access are featured at this lodge...
  </>
);

const booking_3 = (
  <>
    Situated in a quiet alpine setting, Timber Haven Lodge is <br /> located in
    a Big Bear Lake, California. An outdoor hot tub, <br /> table tennis and
    free Wifi access are featured at this lodge...
  </>
);

const ResortHotels = props => {
  return (
    <>
      <div id="resorthotelsFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Hotels, Resorts and Lodges</h1>
          </div>
        </div>
      </div>
      <div id="resorthotelsSecondSection" className="container-fluid">
        <div className="row first">
          <div className="col-md-10">
            <form>
              <div className="row form_row_1">
                <div className="col-md-5">
                  <input type="text" placeholder="Destination" />
                </div>
                <div className="col-md-3">
                  <input type="date" placeholder="Select a Date" />
                </div>
                <div className="col-md-3">
                  <input type="date" placeholder="Select a Date" />
                </div>
              </div>
              <div className="row form_row_2">
                <div className="col-md-2">
                  <label htmlFor="rooms">Rooms</label>
                  <select name="rooms" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <div>
                    <label htmlFor="rooms">Adults</label>
                    <select name="rooms" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  <p>18+</p>
                </div>
                <div className="col-md-2">
                  <div>
                    <label htmlFor="rooms">Children</label>
                    <select name="rooms" id="">
                      <option value="1">0</option>
                      <option value="2">1</option>
                    </select>
                  </div>
                  <p className="children">0 - 17 </p>
                </div>
                <div className="col-md-2">
                  <Checkbox>I am travelling</Checkbox>
                </div>
                <div className="col-md-3">
                  <button type="submit">BOOK NOW</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="resorthotelsThirdSection" className="container-fluid">
        <div className="row parent">
          <div className="col-md-2 column_1">
            <div className="row">
              <div className="col-md-10">
                <h1>Filter Search</h1>
                <form>
                  <select>
                    <option value="country">Country</option>
                  </select>
                </form>
              </div>
            </div>
            <CheckboxColumn />
          </div>
          <div className="col-md-8 com">
            <HotelReservation
              img={require("../../../assets/img/38.png")}
              rating={require("../../../assets/img/39.png")}
              hotel_name="Premier Inn Abu Dhabi Capital Centre"
              city="Abu Dhabi"
              booking_details="Booked 5 times for your dates in the last 24 hours"
              room_number="Double Room"
              bed_number="1 Queen Bed"
              price="NGN 17,235"
              taxes="+ NGN 4,604 taxes and charges"
            />

            <HotelReservation
              img={require("../../../assets/img/40.png")}
              rating={require("../../../assets/img/43.png")}
              hotel_name="Timber Haven Lodge"
              city="Big Bear Lake"
              booking_details={booking_2}
              room_number="Double Room"
              bed_number="1 Queen Bed"
              price="NGN 52,454"
              taxes="+ NGN 5,769.90 taxes and charges"
            />

            <HotelReservation
              img={require("../../../assets/img/41.png")}
              rating={require("../../../assets/img/44.png")}
              hotel_name="Hotel Bon Voyage"
              city="Victoria Island Lagos"
              booking_details="Last booked for your dates 11 hours ago"
              room_number=" Standard Double Room (Complimentary Breakfast for 1)"
              bed_number="1 Single Bed"
              price="NGN 26,408"
              taxes="Including taxes and charges"
            />

            <HotelReservation
              img={require("../../../assets/img/42.png")}
              rating={require("../../../assets/img/45.png")}
              hotel_name="Anantara The Palm Dubai Resort"
              city="Palm Jumeira, Dubai"
              booking_details={booking_3}
              room_number="Standard Room"
              bed_number="1 Double Bed"
              price="NGN 26,408"
              taxes="+ NGN 19,648 taxes and charges"
            />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResortHotels;
