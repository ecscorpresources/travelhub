import React from "react";
import { Link } from "react-router-dom";

const City = ({ tour }) => {
  return (
    <>
      <div className="col-md-5">
        <img src={tour.img} alt="tour" />
        <Link className="text-capitalize" to={`/tours/${tour.id}`}>
          visit {tour.location}
        </Link>
        <p>{tour.description}</p>
      </div>
    </>
  );
};

export default City;
