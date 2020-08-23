import React from "react";
import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";

const Resort = ({ resort }) => {
  return (
    <>
      <div className="col-md-3">
        <img src={resort.img} alt="" />
        <div>
          <p>{resort.name}</p>
          <p>{resort.location}</p>
        </div>
        <div className="rating">
          <div>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <Link to={`/resort/${resort.id}`} className="details">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resort;
