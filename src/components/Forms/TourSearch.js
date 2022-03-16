import React, { Component } from "react";

class TourSearch extends Component {
  render() {
    return (
      <form className="tours_form">
        <div className="row form_row">
          <div className="col-md-4">
            <input type="text" placeholder="Destination" />
          </div>
          <div className="col-md-2">
            <input type="text" placeholder="From" />
          </div>
          <div className="col-md-2">
            <input type="text" placeholder="To" />
          </div>
          <div className="col-md-2">
            <button type="submit">FIND A TOUR GUIDE</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TourSearch;
