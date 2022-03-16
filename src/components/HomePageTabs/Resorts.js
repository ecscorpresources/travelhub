import React, { Component } from "react";
import hotelsresortslodges from "../../data/resortshotels";
import Spinner from "../../components/Globals/Spinner";
import Resort from "./Resort";
// import styled from "styled-components";

class Resorts extends Component {
  state = {
    hotelsresortslodges: [],
  };

  componentDidMount() {
    this.setState({ hotelsresortslodges });
  }
  render() {
    const featuredresorts = this.state.hotelsresortslodges.filter(
      (resort) => resort.featured === true
    );

    return (
      <>
        {this.state.hotelsresortslodges.length === 0 ? (
          <Spinner />
        ) : (
          <>
            {featuredresorts.map((resort) => (
              <Resort resort={resort} key={resort.id} />
            ))}
          </>
        )}
      </>
    );
  }
}

export default Resorts;
