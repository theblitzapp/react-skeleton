import React, { Component } from "react";
import styled from "styled-components";
import skeletonFactory from "../src/index.js";

const Skeleton = skeletonFactory();

const Heading = Skeleton.createElement(styled.h1`
  color: rebeccapurple;
`);

const Paragraph = Skeleton.createElement(styled.p`
  color: black;
`);

class Card extends Component {
  render() {
    const { title, description, className } = this.props;
    return (
      <div>
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    );
  }
}

export default Skeleton.createComponent(
  () => {
    return {
      title: "_____",
      description: "___________"
    };
  },
  ({ title }) => !title
)(Card);
