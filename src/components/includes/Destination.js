import React from "react";

const Destination = props => {
  const { image, Country, City } = props;
  return (
    <>
      <div
        className="col-10 col-sm-10 col-lg-3 my-2"
        style={{ textAlign: "center" }}
      >
        <img src={image} alt="" className="img-fluid " />
        <div>
          <h5>{Country}</h5>
          <h3>{City}</h3>
        </div>
      </div>
    </>
  );
};

export default Destination;
