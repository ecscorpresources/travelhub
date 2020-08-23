import React, { Component } from "react";

class Cruise extends Component {
  render() {
    return (
      <div className="col-md-12 inputs ">
        <form>
          <select className="sail_to">
            <option value="Sail To">Sail To</option>
            <option value="Nigeria">Nigeria</option>
          </select>
          <select className="sail_from">
            <option value="Sail From">Sail From</option>
            <option value="Canada">Canada</option>
          </select>
          <input type="date" placeholder="Departure" />
          <select className="departure">
            <option value="Duration">Duration</option>
            <option value="24days">24days</option>
          </select>
          <button type="submit">FIND A TOUR GUIDE</button>
        </form>
      </div>
    );
  }
}

export default Cruise;
