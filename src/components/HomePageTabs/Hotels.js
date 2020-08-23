import React from "react";

const Hotels = () => {
  return (
    <>
      <div id="hotelsFirstSection">
        <img
          src={require("../../assets/img/HotelsResortsLodges/23.png")}
          alt=""
          className="paris_image img-fluid"
        />
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
        <div className="location">
          <p>Le Bristol Paris</p>
        </div>
      </div>

      <div id="hotelsSecondSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img
              src={require("../../assets/img/HotelsResortsLodges/24.png")}
              alt=""
              className="img-fluid"
            />

            <div>
              <p>Zuri Zanzibal Hotel</p>
            </div>
          </div>

          <div className="col-md-3">
            <img
              src={require("../../assets/img/HotelsResortsLodges/25.png")}
              alt=""
              className="img-fluid"
            />
            <div>
              <p>Kaya Mawa</p>
            </div>
          </div>

          <div className="col-md-3">
            <img
              src={require("../../assets/img/HotelsResortsLodges/26.png")}
              alt=""
              className="img-fluid"
            />
            <div>
              <p>Boston Harbour Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
