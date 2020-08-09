import React from "react";
import { Link } from "react-router-dom";
const SingleTour = (props) => {
  const {
    img,
    tour_name,
    city,
    tour_details,
    room_number,
    bed_number,
    price,
    taxes,
    rating,
  } = props;
  return (
    <>
      <div className="row individual_row">
        <div className="col-md-3">
          <img src={img} alt="" />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1>{tour_name}</h1>
                <ul>
                  <li>
                    <Link to="monkhey">
                      <img src={require("../../assets/img/52.png")} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">{city}</Link>
                  </li>
                </ul>
                <p className="booked">{tour_details}</p>
              </div>
              <div>
                <img src={rating} alt="" />
              </div>
            </div>
          </div>
          <div className="row row_2">
            <div className="col-md-12">
              <div>
                <h4 className="double">{room_number}</h4>
                <p>{bed_number}</p>
              </div>
              <div className=" price">
                <h2 className="price">{price}</h2>
                <p>{taxes}</p>
                <Link to="monkhey">Make a Reservation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTour;
