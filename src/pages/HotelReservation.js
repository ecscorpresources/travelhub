import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import placeholder from '../../../assets/img/ph10.png';

const HotelReservation = (props) => {
  const {
    img,
    hotel_name,
    city,
    booking_details,
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
          <LazyLoadImage
            alt="guide png"
            src={img}
            placeholderSrc={placeholder}
            className="img-fluid "
          />
          <Link to="monhkey">TIMESHARE AVAILABLE</Link>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1>{hotel_name}</h1>
                <ul>
                  <li>
                    <Link to="monkhey">{city}</Link>
                  </li>
                  <li>
                    <Link to="monkhey">View Map</Link>
                  </li>
                  <li>
                    <Link to="monkhey">10km from City's Center</Link>
                  </li>
                </ul>
                <p className="booked">{booking_details}</p>
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
                <p>1 Nights, 1 Person</p>
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

export default HotelReservation;
