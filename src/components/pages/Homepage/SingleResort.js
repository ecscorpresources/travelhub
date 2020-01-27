import React from "react";
import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";

const SingleResort = props => {
  return (
    <>
      <div className="col-md-3">
        <img src={props.image} alt="" />
        <div>
          <p>{props.hotel}</p>
          <p>{props.hotel_location}</p>
        </div>
        <div className="rating">
          <div>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <Link to="monkhey" className="details">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleResort;
