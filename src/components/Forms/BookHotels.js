import React, { Component } from "react";
class BookHotels extends Component {
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Destination"
            className="destination"
          />
        </div>

        <div className="checkin_checkout">
          <input type="text" placeholder="Check In" className="checkin" />
          <input type="text" placeholder="Check Out" className="checkout" />
        </div>

        <div className="submit_div">
          <select name="" id="">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select>
          <button type="submit">BOOK NOW</button>
        </div>
      </form>
    );
  }
}

export default BookHotels;
