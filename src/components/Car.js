import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
import carimg1 from "../assets/img/carrentals/90.png";
import carimg2 from "../assets/img/carrentals/91.png";
import carimg3 from "../assets/img/carrentals/92.png";
import carimg4 from "../assets/img/carrentals/93.png";
import carimg5 from "../assets/img/carrentals/94.png";
import { ReservationLink } from "../components/Globals/StyledComponents";

const Car = ({ car }) => {
  const {
    img,
    maker,
    name,
    features: {
      passengers,
      largesuitcases,
      smallsuitcases,
      transmission,
      airconditioning,
      doors,
    },
    size,
    priceindollar,
    priceinnaira,
  } = car;
  return (
    <article className="d-flex justify-content-between">
      <div className="mr-3">
        <img src={img} alt="car" />

        <div>
          <img src={maker} alt="maker" />
        </div>
      </div>
      <div className="d-flex">
        <div>
          <div className="d-flex">
            <h5 className="name mr-2">{name}</h5>
            <h6>or Similar</h6>
          </div>
          <ul>
            <li className="passengers">
              <img src={carimg1} alt="passengers" />
              <span>{passengers} Passengers</span>
            </li>
            <li className="suitcases">
              <img src={carimg2} alt="suit cases" />
              <span>{largesuitcases} Large Suit Cases</span>
              <span>{smallsuitcases} Small Suit Case</span>
            </li>
            <li className="transmission">
              <img src={carimg3} alt="transmission type" />
              <span>
                {transmission === "automatic"
                  ? "Automatic Transmission"
                  : "Manual Transmission"}
              </span>
            </li>
            {airconditioning && (
              <li className="airconditioning">
                <img src={carimg4} alt="airconditioning" />
                <span>Air Conditioning</span>
              </li>
            )}
            <li className="doors">
              <img src={carimg5} alt="doors" />
              <span>{doors} Doors</span>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div>
            <h4>{size} Car</h4>
          </div>
          <div>
            <p>per Day</p>
            <h3 className="priceindollar">USD {priceindollar}</h3>
            <h3 className="priceinnaira">NGN {priceinnaira}</h3>
            <ReservationLink to="/car_rental">Reserve Vehicle</ReservationLink>
          </div>
        </div>
      </div>
    </article>
  );
};

Car.propTypes = {};

export default Car;
