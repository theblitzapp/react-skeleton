import React, { Component } from "react";
import styled from "styled-components";
import SkeletonFactory from "../page-components/documentation/skeleton-factory.md";
import CreateElement from "../page-components/documentation/create-element.md";
import CreateComponent from "../page-components/documentation/create-component.md";
const Section = styled.section`
  padding: 4rem 0;
  border-bottom: 2px dashed black;
  &:last-of-type {
    border-bottom: none;
  }
`;

class Documentation extends Component {
  render() {
    return (
      <div>
        <Section>
          <SkeletonFactory />
        </Section>
        <Section>
          <CreateElement />
        </Section>
        <Section>
          <CreateComponent />
        </Section>
      </div>
    );
  }
}

export default Documentation;
