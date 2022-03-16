import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchCruise extends Component {
  render() {
    return (
      <>
        <div className="col-md-3">
          <span className="cruise">Cruise Itinerary</span>
          <Link to="monkhey">Edit</Link>
          <ul>
            <li>
              <span>Destination</span> : <span>Caribean Eastern</span>
            </li>
            <li>
              <span>Departure</span> : <span>Hawaii</span>
            </li>
            <li>
              <span>Date</span> : <span> April 2020</span>
            </li>
            <li>
              <span>Duration</span> : <span>6 - 9 Days</span>
            </li>
          </ul>
          <form>
            <select>
              <option value="Cruise Line">Cruise Line</option>
            </select>
            <select>
              <option value="Cruise Ship">Cruise Ship</option>
            </select>
            <button type="submit">SEARCH CRUISE</button>
          </form>
        </div>
      </>
    );
  }
}

export default SearchCruise;
