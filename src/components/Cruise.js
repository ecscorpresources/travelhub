import React from "react";
// import PropTypes from "prop-types";
import cruiseimg from "../assets/img/60.png";
import { ReservationLink } from "../components/Globals/StyledComponents";

const Cruise = ({ cruise }) => {
  const {
    img,
    company,
    companyname,
    name,
    embark,
    disembark,
    priceindollar,
    priceinnaira,
  } = cruise;
  return (
    <article className="d-flex justify-content-between">
      <div className="d-flex">
        <div>
          <h5>{name}</h5>
          <img src={img} alt="cruise" />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h6>Embark - {embark}</h6>
            <h6>DisEmbark - {disembark}</h6>
          </div>
          <div className="d-flex align-items-center">
            <img className="mr-2" src={cruiseimg} alt="company name" />
            <span>{companyname}</span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-between">
        <div>
          <img src={company} alt="company logo" />
        </div>
        <div>
          <p>Per Person</p>
          <h4>USD {priceindollar}</h4>
          <h3>NGN {priceinnaira}</h3>
          <ReservationLink to="/cruise">Book Cruise</ReservationLink>
        </div>
      </div>
    </article>
  );
};

// Cruise.propTypes = {};

export default Cruise;
