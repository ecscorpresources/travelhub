import React from "react";
// import PropTypes from "prop-types";
import cruiseimg from "../../assets/img/cruise/60.png";
import { ReservationLink } from "../../components/Globals/StyledComponents";
import styled from "styled-components";

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
    <Wrapper className="d-flex justify-content-between cruise">
      <div>
        <div>
          <h5 className="name mb-2 text-capitalize">{name}</h5>
          <div className="d-flex">
            <img className="mr-5 img-fluid" src={img} alt="cruise" />
            <div className="d-flex flex-column justify-content-between">
              <div className="itenary">
                <h6>Embark - {embark}</h6>
                <h6>DisEmbark - {disembark}</h6>
              </div>
              <div className="d-flex align-items-baseline">
                <img className="mr-3" src={cruiseimg} alt="company name" />
                <span className="companyname">{companyname}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-between">
        <div>
          <img src={company} alt="company logo" />
        </div>
        <div className="d-flex flex-column align-items-end">
          <p className="mb-3 perperson">Per Person</p>
          <h4 className="priceindollar">USD {priceindollar}</h4>
          <h3 className="priceinnaira">NGN {priceinnaira}</h3>
          <ReservationLink style={{ fontSize: "1.4rem" }} to="/cruise">
            Book Cruise
          </ReservationLink>
        </div>
      </div>
    </Wrapper>
  );
};

// Cruise.propTypes = {};

const Wrapper = styled.article`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem 1rem;

  .name {
    font-size: 1.4rem;
    color: #0a5c7d;
  }

  .itenary {
    margin-top: 7rem;

    h6 {
      font-size: 1.3rem;
      line-height: 1.6;
    }
  }

  .companyname {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: #0a5c7d;
  }

  .perperson {
    font-size: 1.4rem;
  }

  .priceindollar {
    font-size: 1.6rem;
    color: #f58634;
  }

  .priceinnaira {
    font-size: 1.4rem;
  }
`;

export default Cruise;
