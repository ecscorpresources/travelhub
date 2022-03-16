import React, { Component } from "react";
import hotels from "../../data/resortshotels";
import Spinner from "../../components/Globals/Spinner";
import BookHotels from "../Forms/BookHotels";

class Hotels extends Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    this.setState({ hotels });
  }
  render() {
    const featuredhotels = this.state.hotels.filter(
      (item) => item.type === "hotel"
    );

    const herohotel = featuredhotels.find((hotel) => hotel.hero === true);
    const otherhotels = featuredhotels.filter((hotel) => hotel.hero === false);

    return (
      <>
        {this.state.hotels.length === 0 ? (
          <Spinner />
        ) : (
          <>
            <div id="hotelsFirstSection">
              <img
                src={herohotel.img}
                alt={herohotel.name}
                className="paris_image img-fluid"
              />
              <BookHotels />
              <div className="location">
                <p className="text-capitalize">{herohotel.name}</p>
              </div>
            </div>

            <div id="hotelsSecondSection" className="container-fluid">
              <div className="row">
                {otherhotels.map((hotel) => (
                  <div key={hotel.id} className="col-md-3">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="img-fluid"
                    />
                    <div>
                      <p className="text-capitalize">{hotel.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Hotels;
