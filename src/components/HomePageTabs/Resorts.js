import React, { Component } from "react";
import hotelsresortslodges from "../../data/resortshotels";
import Spinner from "../../components/Globals/Spinner";
import SingleRsort from "./SingleResort";

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

    console.log(featuredresorts);
    return (
      <>
        {this.state.hotelsresortslodges.length === 0 ? (
          <Spinner />
        ) : (
          <>
            {featuredresorts.map((resort) => (
              <SingleRsort resort={resort} key={resort.id} />
            ))}
          </>
        )}
      </>
    );
  }
}

export default Resorts;
