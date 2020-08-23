import React, { Component } from "react";
import toursguides from "../../data/toursguides";
import Spinner from "../../components/Globals/Spinner";
import City from "./City";
// import styled from "styled-components";

class Resorts extends Component {
  state = {
    toursguides: [],
  };

  componentDidMount() {
    this.setState({ toursguides });
  }
  render() {
    const featuredtours = this.state.toursguides.filter(
      (resort) => resort.featured === true
    );

    return (
      <>
        {this.state.toursguides.length === 0 ? (
          <Spinner />
        ) : (
          <>
            {featuredtours.map((tour) => (
              <City tour={tour} key={tour.id} />
            ))}
          </>
        )}
      </>
    );
  }
}

export default Resorts;
