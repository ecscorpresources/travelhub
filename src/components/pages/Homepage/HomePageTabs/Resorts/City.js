import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import placeholder from '../../../../../assets/img/ph6.png';

const City = (props) => {
  return (
    <>
      <div className="col-md-5">
        <LazyLoadImage
          alt="destination png"
          src={props.image}
          placeholderSrc={placeholder}
          className="img-fluid "
        />
        <Link to="monkhey">{props.city}</Link>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default City;
