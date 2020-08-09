import React from "react";

const Rentals = () => {
  return (
    <>
      <div id="rentalsFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img src={require("../../assets/img/27.png")} alt="" />
          </div>
          <div className="col-md-4">
            <h1>Rides</h1>
            <p>that match your style</p>
          </div>
        </div>
      </div>
      <div id="rentalSecondSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img src={require("../../assets/img/28.png")} alt="" />
          </div>
          <div className="col-md-3">
            <img src={require("../../assets/img/29.png")} alt="" />
          </div>
          <div className="col-md-3">
            <img src={require("../../assets/img/30.png")} alt="" />
          </div>
        </div>
      </div>
      <div id="rentalThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
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
          </div>
        </div>
      </div>
      <div id="rentalFourthSection" className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <img src={require("../../assets/img/31.png")} alt="" />
          </div>
          <div className="col-md-2">
            <img src={require("../../assets/img/32.png")} alt="" />
          </div>
          <div className="col-md-2">
            <img src={require("../../assets/img/33.png")} alt="" />
          </div>
          <div className="col-md-2">
            <img src={require("../../assets/img/34.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rentals;
