import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import { Divider } from "@chakra-ui/core";

class CruiseFilter extends Component {
  render() {
    return (
      <>
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
            <Checkbox value="Gourmet Food Cruise">Gourmet Food Cruise</Checkbox>
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
      </>
    );
  }
}

export default CruiseFilter;
