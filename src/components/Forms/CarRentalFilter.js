import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { Divider } from "@chakra-ui/core";

class CarRentalFilter extends Component {
  render() {
    return (
      <>
        <div className="col-md-2">
          <h1>Filter Search</h1>
          <CheckboxGroup>
            <Divider className="first_divider" />
            {/* <span>
                <IoIosArrowDown />
                Car Rental Brand
              </span> */}
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
            {/* <span>
                <IoIosArrowDown />
                Car Specification
              </span> */}
            <Checkbox value="">Air Conditioning</Checkbox>
            <Checkbox value="">Automatic Transmission</Checkbox>
            <Checkbox value="">Manual Gearbox</Checkbox>
            <Checkbox value="">4+ Doors</Checkbox>
            <Checkbox value="">Diesel</Checkbox>
          </CheckboxGroup>
          <CheckboxGroup>
            <Divider className="divider" />
            {/* <span>
                <IoIosArrowDown />
                Fuel
              </span> */}
            <Checkbox value="">Petrol</Checkbox>
            <Checkbox value="">Diesel</Checkbox>
            <Checkbox value="">Hybrid</Checkbox>
          </CheckboxGroup>
        </div>
      </>
    );
  }
}

export default CarRentalFilter;
