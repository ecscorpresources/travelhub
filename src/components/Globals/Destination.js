import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import placeholder from '../../assets/img/ph5.png';

const Destination = (props) => {
  const { image, Country, City } = props;
  return (
    <>
      <div
        className="col-10 col-sm-10 col-lg-3 my-2"
        style={{ textAlign: 'center' }}
      >
        <div className="image">
          <LazyLoadImage
            alt="destination png"
            src={image}
            placeholderSrc={placeholder}
            className="img-fluid "
          />
        </div>
        <div className="txt">
          <h5>{Country}</h5>
          <h3>{City}</h3>
        </div>
      </div>
    </>
  );
};

export default Destination;
