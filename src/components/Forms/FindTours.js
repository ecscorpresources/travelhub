import React, { Component } from "react";
class FindTours extends Component {
  render() {
    return (
      <>
        <div className="col-md-10">
          <form>
            <div className="row form_row_1">
              <div className="col-md-4">
                <input type="text" placeholder="Tour Location" />
              </div>
              <div className="col-md-2">
                <input type="date" placeholder="From" />
              </div>
              <div className="col-md-2">
                <input type="date" placeholder="To" />
              </div>
              <div className="col-md-2">
                <button type="submit">FIND TOUR</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FindTours;
