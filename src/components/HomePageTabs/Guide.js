import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Guide = ({ guide }) => {
  const { img, name, description, languages } = guide;
  return (
    <Container>
      <div className="guide">
        <Link to="/tours_guides">
          <img src={img} alt="guide" />
        </Link>
      </div>
      <div className="profile ">
        <div className="d-flex justify-content-between align-items-center name-languages-section">
          <p className="name">{name}</p>
          <ul className="d-flex languages">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
        <p className="description">{description}</p>
      </div>
    </Container>
  );
};

const Container = styled.article`
  position: relative;

  .guide {
    img {
      width: 100%;
    }
  }

  .profile {
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
  }
  .name {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  .languages {
    li {
      font-size: 11px;
      text-transform: capitalize;
    }

    li:not(:first-child) {
      margin-left: 5px;
    }
  }

  .description {
    font-size: 11px;
    padding: 0.1rem 1rem;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  .name-languages-section {
    background: #fff;
    padding: 0.1rem 1rem;
  }
`;

export default Guide;
