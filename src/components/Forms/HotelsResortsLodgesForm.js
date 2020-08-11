import React, { Component } from "react";
import { Checkbox } from "@chakra-ui/core";

class HotelsResortsLodgesForm extends Component {
  render() {
    return (
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
    );
  }
}

export default HotelsResortsLodgesForm;
