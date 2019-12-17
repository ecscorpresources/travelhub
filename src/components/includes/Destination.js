import React from "react";

const Destination = props => {
  const { image, Country, City } = props;
  return (
    <>
      <div className="col-md-3">
        <img src={image} alt="" />
        <div>
          <h5>{Country}</h5>
          <h3>{City}</h3>
        </div>
      </div>
    </>
  );
};

export default Destination;
