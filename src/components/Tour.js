import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { ReservationLink } from "../components/Globals/StyledComponents";
import locationimg from "../assets/img/toursandguides/52.png";
// import tourimg1 from "../assets/img/toursandguides/70.png";
// import tourimg2 from "../assets/img/toursandguides/71.png";
// import tourimg3 from "../assets/img/toursandguides/72.png";
import tourimg4 from "../assets/img/toursandguides/73.png";
import tourimg5 from "../assets/img/toursandguides/74.png";
import tourimg6 from "../assets/img/toursandguides/75.png";
import tourimg7 from "../assets/img/toursandguides/76.png";
import groupallowed from "../assets/img/toursandguides/78.png";
import disabledallowed from "../assets/img/toursandguides/77.png";
import petsallowed from "../assets/img/toursandguides/79.png";
import tourrating from "../assets/img/toursandguides/51.png";

const Tour = ({ tour }) => {
  const {
    img,
    name,
    location,
    description,
    numberofpeople,
    duration,
    littletext,
    tours: {
      // all,
      // citytours,
      // museumtours,
      naturetours,
      walktours,
      eatanddrinktours,
      historictours,
    },
    others: { groups, disabled, pets },
    price,
    rating,
  } = tour;

  return (
    <Container className="resort d-flex">
      <article className="resort-img-section">
        <div>
          <img style={{ height: "254px" }} src={img} alt="tour" />
        </div>
      </article>
      <article className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="name">{name}</h5>
            <ul className="d-flex mb-2">
              <img src={locationimg} alt="location" />
              <li className="text-capitalize location ml-2">{location}</li>
            </ul>
            {littletext ? <p className="littletext">{littletext}</p> : null}
            <p className="description">{description}</p>
          </div>
          <div>
            {rating === 3 ? <img src={tourrating} alt="rating" /> : null}
          </div>
        </div>

        <div className="d-flex justify-content-between price-section">
          <div>
            {naturetours && walktours && historictours && groups && pets ? (
              <ul className="d-flex tour-types">
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg4}
                    alt="nature tours"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg5}
                    alt="walk tours"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg7}
                    alt="historic tours"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={groupallowed}
                    alt="groups allowed"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={petsallowed}
                    alt="pets allowed"
                  />
                </li>
              </ul>
            ) : historictours && walktours ? (
              <ul className="d-flex tour-types">
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg7}
                    alt="nature tours"
                  />
                </li>

                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg5}
                    alt="nature tours"
                  />
                </li>
              </ul>
            ) : eatanddrinktours &&
              historictours &&
              walktours &&
              disabled &&
              groups &&
              pets ? (
              <ul className="d-flex tour-types">
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg6}
                    alt="eatanddrinktours"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg7}
                    alt="historic tours"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={tourimg5}
                    alt="walk tours"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={disabledallowed}
                    alt="disabled allowed"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={groupallowed}
                    alt="group allowed"
                  />
                </li>
                <li>
                  <img
                    style={{ height: "25px" }}
                    src={petsallowed}
                    alt="pets allowed"
                  />
                </li>
              </ul>
            ) : null}

            <p className="number">Tour for up to {numberofpeople}</p>
            <p className="duration">Duration: {duration}</p>
          </div>

          <div className="text-right">
            <h4 className="price">&#8358;{price}</h4>
            <p style={{ fontSize: "1.4rem" }}>(for one person)</p>
            <ReservationLink to="/">View Tour Details</ReservationLink>
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

  .location {
    font-size: 1.4rem;
  }

  .description,
  .littletext {
    font-size: 1.3rem;
    width: 85%;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  .price-section {
    border-top: 1px solid #000;
    margin-top: 2rem;
    padding: 1.5rem 0;
  }

  .number,
  .duration {
    text-transform: capitalize;
    font-size: 1.4rem;
    color: #f58634;
  }

  .price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem !important;
  }

  ul.tour-types {
    margin-bottom: 2rem !important;
    li:not(:last-child) {
      margin-right: 2rem;
    }

    li:nth-child(4) {
      border-left: 1px solid #000;
      padding-left: 2rem;
    }
  }
`;

Tour.propTypes = {};

export default Tour;
