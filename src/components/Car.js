import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CarRental from "../pages/carrentalpage";

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
    <CarRental className="car">
      <article>
        <div>
          <img src={img} alt="car" />
        </div>
      </article>
    </CarRental>
  );
};

Car.propTypes = {};

const CarWrapper = styled.section``;
export default Car;
