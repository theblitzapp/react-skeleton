import React, { Component } from "react";
import styled from "styled-components";
import skeletonFactory, { createSkeletonCSSMixin } from "../src/index.js";
import createDemo from "./Demo";

const Skeleton = skeletonFactory(
  createSkeletonCSSMixin("dodgerblue", "royalblue", 5)
);

const Background = styled.div`
  background: white;
  padding: 2rem;
  display: grid;
  box-shadow: 0 2px 6px -2px black;
  grid-template-areas:
    "a b b"
    "a c c";
  grid-template-columns: 100px 1fr 1fr;
  grid-column-gap: 2rem;
`;

const Image = Skeleton.createElement(styled.img`
  border-radius: 5px;
  grid-area: a;
  max-width: 100%;
`);

const Heading = Skeleton.createElement(styled.h1`
  color: #333;
  margin: 0 0 1rem;
  grid-area: b;
`);

const Paragraph = Skeleton.createElement(styled.p`
  color: #888;
  margin: 0;
  grid-area: c;
`);

class Card extends Component {
  render() {
    const { title, description, img } = this.props;
    return (
      <Background>
        <Image src={img} />
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </Background>
    );
  }
}

const SC = Skeleton.createComponent(
  () => {
    return {
      title: "_____",
      description: "___________",
      img: "/static/placeholder100x100.png"
    };
  },
  ({ title }) => !title
)(Card);

export default createDemo(SC);
