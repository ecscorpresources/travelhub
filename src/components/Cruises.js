import React, { Component } from "react";
import Spinner from "../components/Globals/Spinner";
import cruise from "../data/cruise";
import styled from "styled-components";
import Cruise from "../components/Cruise";

class Cruises extends Component {
  state = {
    cruise: [],
  };

  componentDidMount() {
    this.setState({ cruise });
  }

  render() {
    return (
      <>
        {this.state.cruise.length === 0 ? (
          <Spinner />
        ) : (
          <CruiseWrapper>
            {this.state.cruise.map((cruise) => (
              <Cruise key={cruise.id} cruise={cruise} />
            ))}
          </CruiseWrapper>
        )}
      </>
    );
  }
}

const CruiseWrapper = styled.section``;
export default Cruises;
