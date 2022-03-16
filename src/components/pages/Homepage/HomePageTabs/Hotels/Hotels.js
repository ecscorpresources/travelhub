import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import bg from '../../../../../assets/img/23.png';
import bg2 from '../../../../../assets/img/24.png';
import bg3 from '../../../../../assets/img/25.png';
import bg4 from '../../../../../assets/img/26.png';
import placeholder from '../../../../../assets/img/ph3.png';
import placeholder2 from '../../../../../assets/img/ph4.png';

const Hotels = () => {
  return (
    <>
      <div id="hotelsFirstSection">
        <LazyLoadImage
          alt="paris png"
          src={bg}
          placeholderSrc={placeholder}
          className="paris_image img-fluid"
        />
        <form>
          <div>
            <input
              type="text"
              placeholder="Destination"
              className="destination"
            />
          </div>

          <div className="checkin_checkout">
            <input type="text" placeholder="Check In" className="checkin" />
            <input type="text" placeholder="Check Out" className="checkout" />
          </div>

          <div className="submit_div">
            <select name="" id="">
              <option value="option1">option1</option>
              <option value="option2">option2</option>
            </select>
            <button type="submit">BOOK NOW</button>
          </div>
        </form>
        <div className="location">
          <p>Le Bristol Paris</p>
        </div>
      </div>

      <div id="hotelsSecondSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <LazyLoadImage
              alt="paris png"
              src={bg2}
              placeholderSrc={placeholder2}
              className="img-fluid"
            />
            <div>
              <p>Zuri Zanzibal Hotel</p>
            </div>
          </div>

          <div className="col-md-3">
            <LazyLoadImage
              alt="paris png"
              src={bg3}
              placeholderSrc={placeholder2}
              className="img-fluid"
            />
            <div>
              <p>Kaya Mawa</p>
            </div>
          </div>

          <div className="col-md-3">
            <LazyLoadImage
              alt="paris png"
              src={bg4}
              placeholderSrc={placeholder2}
              className="img-fluid"
            />
            <div>
              <p>Boston Harbour Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
