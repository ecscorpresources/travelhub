import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Destination from '../../includes/Destination';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Resort from './HomePageTabs/Resorts/Resort';
import placeholder from '../../../assets/img/ph8.png';
import placeholder2 from '../../../assets/img/ph9.png';
import travel from '../../../assets/img/5th.png';
import luxury from '../../../assets/img/romance.png';

const Homepage = () => {
  const [startDateDepart, setStartDateDepart] = React.useState();
  const [startDateArrive, setStartDateArrive] = React.useState();
  return (
    <>
      <div id="homeFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Own a slice of Luxury</h1>
          </div>
        </div>

        <div className="row time_share">
          <div className="col-md-3 my-1">
            <Link to="monkhey">Buy TimeShare</Link>
          </div>
          <div className="col-md-3 my-1">
            <Link to="monkhey">Sell TimeShare</Link>
          </div>
        </div>
      </div>

      <div id="homepalmSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <p>
              <sup>
                <FaQuoteLeft />
              </sup>
              Take a time out, refresh and enjoy a vacation in paradise
              <sup>
                <FaQuoteRight />
              </sup>
            </p>
          </div>
        </div>
      </div>
      <div id="homeresortSection" className="container-fluid">
        <Resort />
        <div className="row flight_booking">
          <div className="col-md-12">
            <h6>Flight Booking</h6>
          </div>
        </div>
        <div className="row parent">
          <div className="col-md-12">
            <div className="row row-1">
              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <div className="select-div">
                  <select>
                    <option value="One Way">One Way</option>
                  </select>
                </div>
              </div>
              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <input type="text" placeholder="From" />
              </div>

              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <input type="text" placeholder="To" />
              </div>
              <DatePicker
                selected={startDateDepart}
                todayButton={'Today'}
                onChange={(date) => setStartDateDepart(date)}
                customInput={<CalenderComponent placeholder="Departure" />}
                placeholderText="Departure"
              />
              <DatePicker
                selected={startDateArrive}
                todayButton={'Today'}
                onChange={(date) => setStartDateArrive(date)}
                customInput={<CalenderComponent placeholder="Arrival" />}
                placeholderText="Arrival"
              />
            </div>
            <div className="row row-2">
              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <select>
                  <option value="One Way">Economy</option>
                </select>
              </div>

              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <select>
                  <option value="One Way">Prefered Airline</option>
                </select>
              </div>
              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <select>
                  <option value="One Way">Adults</option>
                </select>
              </div>
              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <select>
                  <option value="One Way">Travellers</option>
                </select>
              </div>
              <div className="col-10 col-sm-10 col-lg-2 my-1">
                <button type="submit">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="homeSecondSection" className="container-fluid">
        <div className="row row-1">
          <div className="col-md-12">
            <h1>Popular Destinations</h1>
            <img
              src={require('../../../assets/img/dots.png')}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row row-2">
          <Destination
            image={require('../../../assets/img/2th.png')}
            Country=" Visit the sphinx"
            City="Egypt"
          />
          <Destination
            image={require('../../../assets/img/3th.png')}
            Country="Visit the great wall of China"
            City="China"
          />
          <Destination
            image={require('../../../assets/img/4th.png')}
            Country="Visit the Masai Mara Reserve"
            City="Kenya"
          />
        </div>
      </div>
      <div id="homeThirdSection" className="container-fluid">
        <div className="row parent">
          <div className="col-10 col-sm-10 col-lg-4">
            <LazyLoadImage
              alt="travel png"
              src={travel}
              placeholderSrc={placeholder2}
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 relative">
            <h1>Travel Tips</h1>
            <hr />
            <h2>
              What to take <br /> on mountain hiking <br /> day trips
            </h2>
            <p>
              You can easily be caught unawares <br />
              Little changes in our hiking packs <br /> could mean the
              difference between <br /> danger and escape...
            </p>
            <p className="font-weight-bold">Read More...</p>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <LazyLoadImage
                  alt="luxury png"
                  src={luxury}
                  placeholderSrc={placeholder}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const CalenderComponent = ({ value, onClick, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        className="ml-3"
        style={{
          padding: '1rem',
          width: '10rem',
          border: 'none',
        }}
      />
      <div
        className="img-container"
        style={{
          float: 'right',
          marginRight: 6,
          marginTop: 15,
          marginLeft: '-30px',
          position: 'relative',
          zIndex: 2,
        }}
        onClick={onClick}
      >
        <img src={require('../../../assets/img/calendar.png')} alt="calendar" />
      </div>
    </div>
  );
};

export default Homepage;
