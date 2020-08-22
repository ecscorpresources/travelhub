import React, { Component } from "react";
import Spinner from "../components/Globals/Spinner";
import cars from "../data/cars";
import styled from "styled-components";
import Car from "./Car";

class Cars extends Component {
  state = {
    cars: [],
  };

  componentDidMount() {
    this.setState({ cars });
  }

  render() {
    console.log(this.state.cars);

    return (
      <>
        {this.state.cars.length === 0 ? (
          <Spinner />
        ) : (
          <CarsWrapper>
            {this.state.cars.map((car) => (
              <Car key={car.id} car={car} />
            ))}
          </CarsWrapper>
        )}
      </>
    );
  }
}

const CarsWrapper = styled.section``;

export default Cars;
