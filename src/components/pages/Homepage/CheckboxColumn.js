import React from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";

const CheckboxColumn = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-10 checkboxes">
          <CheckboxGroup>
            <Checkbox value="Timeshare">Timeshare</Checkbox>
            <Checkbox value="Resort">Resort</Checkbox>
            <Checkbox value="Hotels">Hotels</Checkbox>
            <Checkbox value="Lodge">Lodge</Checkbox>
            <Checkbox value="Others">Others</Checkbox>
            <Checkbox value="Only Available">View Only Available</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 checkboxes">
          <CheckboxGroup>
            <Checkbox value="Pool">Pool</Checkbox>
            <Checkbox value="Free Wifi">Free Wifi</Checkbox>
            <Checkbox value="Free Parking">Free Parking</Checkbox>
            <Checkbox value="Free Breakfast">Free Breakfast</Checkbox>
            <Checkbox value="Pet Friendly">Pet Friendly</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 checkboxes">
          <CheckboxGroup>
            <Checkbox value="5 star">5 star</Checkbox>
            <Checkbox value="4 star">4 star</Checkbox>
            <Checkbox value="3 star">3 star</Checkbox>
            <Checkbox value="2 star">2 star</Checkbox>
            <Checkbox value="1 star">1 star</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 checkboxes">
          <CheckboxGroup>
            <Checkbox value="Superb 9+">Superb 9+</Checkbox>
            <Checkbox value="Very Good 8+">Very Good 8+</Checkbox>
            <Checkbox value="Good 7+">Good 7+</Checkbox>
            <Checkbox value="Pleasant 6+">Pleasant 6+</Checkbox>
            <Checkbox value="Ok 5+">Ok 5+</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 checkboxes">
          <CheckboxGroup>
            <Checkbox value="Parking">Parking</Checkbox>
            <Checkbox value="Free Wifi">Free Wifi</Checkbox>
            <Checkbox value="Room Service">Room Service</Checkbox>
            <Checkbox value="Restaurant">Restaurant</Checkbox>
            <Checkbox value="GYM">GYM</Checkbox>
            <Checkbox value="Free Breakfast">Free Breakfast</Checkbox>
            <Checkbox value="Pool">Pool</Checkbox>
            <Checkbox value="Pet Friendly">Pet Friendly</Checkbox>
            <Checkbox value="">Smoking Areas</Checkbox>
            <Checkbox value="kakashi">Non Smoking</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
    </>
  );
};

export default CheckboxColumn;
