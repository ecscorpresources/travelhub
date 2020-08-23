import React, { Component } from "react";
import { guides } from "../../data/guides";
import styled from "styled-components";
import Spinner from "../Globals/Spinner";
import Guide from "../HomePageTabs/Resorts/Guide";

class Guides extends Component {
  state = {
    guides: [],
  };

  componentDidMount() {
    this.setState({ guides });
  }
  render() {
    return (
      <>
        {this.state.guides.length === 0 ? (
          <Spinner />
        ) : (
          <GuideWrapper>
            {this.state.guides.map((guide) => (
              <Guide key={guide.id} guide={guide} />
            ))}
          </GuideWrapper>
        )}
      </>
    );
  }
}

const GuideWrapper = styled.section`
  width: 73vw;
  margin: 4rem auto;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 15px;
  padding: 15px;
`;

export default Guides;
