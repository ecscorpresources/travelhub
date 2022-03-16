import React, { Component } from "react";
import Spinner from "../../components/Globals/Spinner";
import hotelsresortslodges from "../../data/resortshotels";
import HotelResortLodge from "./ResortHotel";
import styled from "styled-components";

class HotelsResortsLodges extends Component {
  state = {
    hotelsresortslodges: [],
  };

  componentDidMount() {
    this.setState({ hotelsresortslodges });
  }
  render() {
    return (
      <>
        {this.state.hotelsresortslodges.length === 0 ? (
          <Spinner />
        ) : (
          <ResortsWrapper>
            {this.state.hotelsresortslodges.map((resort) => (
              <HotelResortLodge resort={resort} key={resort.id} />
            ))}
          </ResortsWrapper>
        )}
      </>
    );
  }
}

const ResortsWrapper = styled.section`
  .resort {
    background-color: #fff;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export default HotelsResortsLodges;
