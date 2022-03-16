import React, { Component } from "react";
import cars from "../../data/cars";
import Spinner from "../../components/Globals/Spinner";
import RentCar from "../Forms/RentCar";

class Rentals extends Component {
  state = {
    cars: [],
  };

  componentDidMount() {
    this.setState({ cars });
  }
  render() {
    const featuredcars = this.state.cars.filter((car) => car.featured === true);

    const herocar = featuredcars.find((car) => car.hero === true);
    const othercars = featuredcars.filter((car) => car.hero === false);

    //loop thru the cars and return an array of the makers
    const makers = featuredcars.map((car) => car.maker);

    return (
      <>
        {this.state.cars.length === 0 ? (
          <Spinner />
        ) : (
          <>
            <div id="rentalsFirstSection" className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <img src={herocar.img} alt={herocar.name} />
                </div>
                <div className="col-md-4">
                  <h1>Rides</h1>
                  <p>that match your style</p>
                </div>
              </div>
            </div>
            <div id="rentalSecondSection" className="container-fluid">
              <div className="row">
                {othercars.map((car) => (
                  <div className="col-md-3">
                    <img src={car.img} alt={car.img} />
                  </div>
                ))}
              </div>
            </div>
            <div id="rentalThirdSection" className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <RentCar />
                </div>
              </div>
            </div>
            <div id="rentalFourthSection" className="container-fluid">
              <div className="row">
                {makers.map((maker, index) => (
                  <div key={index} className="col-md-2">
                    <img src={maker} alt="maker" />
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

export default Rentals;
