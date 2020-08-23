import React, { Component } from "react";
import { tours } from "../../data/tours_guides";
import Spinner from "../../components/Globals/Spinner";
import Tour from "./Tour";
import styled from "styled-components";

class Tours extends Component {
  state = {
    tours: [],
  };

  componentDidMount() {
    this.setState({ tours });
  }
  render() {
    return (
      <>
        {this.state.tours.length === 0 ? (
          <Spinner />
        ) : (
          <TourWrapper>
            {this.state.tours.map((tour) => (
              <Tour key={tour.id} tour={tour} />
            ))}
          </TourWrapper>
        )}
      </>
    );
  }
}

const TourWrapper = styled.section`
  .tour {
    background-color: #fff;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

`;

export default Tours;
