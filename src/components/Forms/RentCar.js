import React, { Component } from "react";
class RentCar extends Component {
  render() {
    return (
      <form>
        <div className="date">
          <input type="date" placeholder="Rental Date" />
          <input type="date" placeholder="Rental End" />
        </div>
        <div className="rent_car">
          <select>
            <option default="Country">Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Canada">Canada</option>
            <option value="England">England</option>
          </select>
          <button type="submit">RENT A CAR</button>
        </div>
      </form>
    );
  }
}

export default RentCar;
