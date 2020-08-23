import React from "react";
// import PropTypes from "prop-types";
import carimg1 from "../assets/img/carrentals/90.png";
import carimg2 from "../assets/img/carrentals/91.png";
import carimg3 from "../assets/img/carrentals/92.png";
import carimg4 from "../assets/img/carrentals/93.png";
import carimg5 from "../assets/img/carrentals/94.png";
import { ReservationLink } from "../components/Globals/StyledComponents";
import styled from "styled-components";

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
    <Wrapper className="d-flex car">
      <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
        <img src={img} alt="car" />

        <div className="maker">
          <img src={maker} alt="maker" />
        </div>
      </div>
      <div className="d-flex flex-grow-1 justify-content-between py-3 px-3">
        <div>
          <div className="d-flex align-items-baseline">
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
        <div className="d-flex flex-column align-items-end justify-content-between">
          <div>
            <h4 className="size text-capitalize">{size} Car</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <p className="mb-4">per Day</p>
            <h3 className="priceindollar mb-2">USD {priceindollar}</h3>
            <h3 className="priceinnaira mb-3">NGN {priceinnaira}</h3>
            <ReservationLink to="/car_rental">Reserve Vehicle</ReservationLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

Car.propTypes = {};

const Wrapper = styled.article`
  border: 1px solid #ddd;
  background-color: #fff;

  .name {
    font-size: 2rem;
    text-transform: capitalize;
    color: #0a5c7d;
    margin-bottom: 1rem !important;
  }

  h6 {
    font-size: 1.5rem;
  }

  ul li:not(:last-child) {
    margin-bottom: 1rem !important;
  }

  ul li img {
    margin-right: 1rem;
  }

  ul li span {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .priceindollar {
    font-size: 1.9rem;
  }

  .priceinnaira {
    font-size: 1.5rem;
  }
`;

export default Car;
