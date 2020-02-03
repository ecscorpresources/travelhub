import React from "react";
import { Link } from "react-router-dom";

const City = props => {
  return (
    <>
      <div className="col-md-5">
        <img src={props.image} alt="" />
        <Link to="monkhey">{props.city}</Link>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default City;
