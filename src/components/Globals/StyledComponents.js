import styled from "styled-components";
import { Link } from "react-router-dom";

export const TimeShareButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #f58634;
  padding: 0.9rem 2rem;
  display: block;
  font-size: 1.45rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  text-transform: capitalize;

  &:hover {
    color: #fff;
    background-color: #f58634;
  }
`;

export const ReservationLink = styled(TimeShareButton)`
  background-color: #0a5c7d;

  &:hover {
    color: #fff;
    background-color: #0a5c7d;
  }
`;
