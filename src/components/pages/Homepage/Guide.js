import React from "react";

const Guide = props => {
  const { image, name, language, profile } = props;
  return (
    <>
      <div className="col-md-3 col-sm-12">
        <img src={image} alt="" />
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
