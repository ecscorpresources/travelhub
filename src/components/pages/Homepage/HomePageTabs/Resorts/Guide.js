import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import placeholder from '../../../../../assets/img/ph7.png';

const Guide = (props) => {
  const { image, name, language, profile } = props;
  return (
    <>
      <div className="col-md-3 col-sm-12">
        <LazyLoadImage
          alt="guide png"
          src={image}
          placeholderSrc={placeholder}
          className="img-fluid "
        />
        <div>
          <p className="name">{name}</p>
          <p>{language}</p>
        </div>
        <div>
          <p>{profile}</p>
        </div>
      </div>
    </>
  );
};

export default Guide;
