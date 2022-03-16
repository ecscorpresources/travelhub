import React, { Component } from "react";
import CheckboxColumn from "../Globals/CheckboxColumn";

class HotelsResortsLodgeFilter extends Component {
  render() {
    return (
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
    );
  }
}

export default HotelsResortsLodgeFilter;
