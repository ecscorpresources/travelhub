import React, { Component } from "react";

class GuidesForm extends Component {
  render() {
    return (
      <>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4">
              <h1>Find a Guide</h1>
            </div>
            <div className="col-md-8 form">
              <form>
                <input type="text" placeholder="Enter Location" />
                <button type="submit">LOCATE GUIDE</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GuidesForm;
