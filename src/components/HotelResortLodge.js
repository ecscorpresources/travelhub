import React from "react";
import {
  TimeShareButton,
  ReservationLink,
} from "../components/Globals/StyledComponents";
import { FaRegCreditCard } from "react-icons/fa";
import styled from "styled-components";

const HotelResortLodge = ({ resort }) => {
  const {
    img,
    name,
    type,
    location,
    description,
    distance,
    timelastbooked,
    rooms,
    bed,
    // rating,
    // reviews,
    timeshare,
    price,
    creditcard,
    taxes,
    capacity,
  } = resort;
  return (
    <Container className="resort d-flex">
      <article className="resort-img-section">
        <div>
          <img src={img} alt={type} />
        </div>
        {timeshare === true ? (
          <TimeShareButton>timeshare available</TimeShareButton>
        ) : null}
      </article>
      <article className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="name">{name}</h5>
            <div className="d-flex align-items-center">
              <ul className="d-flex mb-4">
                <li className="text-capitalize location">{location}</li>
                <li className="text-capitalize map">view map</li>
                {distance ? <li className="distance">{distance}</li> : null}
              </ul>
            </div>
            {creditcard === false ? (
              <div className="d-flex align-items-center creditcard">
                <FaRegCreditCard style={{ fill: "green", fontSize: "20px" }} />
                <span style={{ color: "green" }}>
                  Reservation possible without credit card
                </span>
              </div>
            ) : null}

            {timelastbooked ? (
              <p className="timelastbooked">{timelastbooked} </p>
            ) : null}
            {description ? (
              <h6 className="description">{description}</h6>
            ) : null}
          </div>
          <div>review section</div>
        </div>

        <div className="d-flex justify-content-between price-section">
          <div>
            <h4 className="rooms">{rooms}</h4>
            <h3 className="beds">{bed}</h3>
          </div>

          <div className="text-right">
            <h5 className="capacity">{capacity}</h5>
            <h4 className="price">{price}</h4>
            <p className="taxes">{taxes} taxes and charges</p>
            <ReservationLink>Make a Reservation</ReservationLink>
          </div>
        </div>
      </article>
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem 2rem 3rem 2rem;

  .resort-img-section {
    margin-right: 2rem;
  }

  .name {
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 600;
    color: #0a5c7d;
    margin-bottom: 0.5rem !important;
  }

  .location,
  .map,
  .distance {
    font-size: 1.4rem;
  }

  ul li:not(:last-child) {
    border-right: 1px solid #000;
    margin-right: 10px;
    padding-right: 10px;
    color: #24a9ce;
    text-decoration: underline;
  }

  .timelastbooked {
    font-size: 1.4rem;
  }

  .description {
    font-size: 1.3rem;
    color: #f58634;
    font-weight: 400;
    width: 67%;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  .price-section {
    border-top: 1px solid #000;
    margin-top: 6rem;
    padding: 1.5rem 0;
  }

  .rooms {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 0.5rem !important;
  }

  .beds {
    text-transform: capitalize;
    font-size: 1.5rem;
  }

  .creditcard {
    span {
      color: green;
      font-size: 1.2rem;
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  .capacity {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem !important;
  }

  .price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem !important;
  }

  .taxes {
    font-size: 1.4rem;
  }
`;

export default HotelResortLodge;
