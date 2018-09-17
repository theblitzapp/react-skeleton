import React, { Component } from "react";
import createSkeleton from "../src/index.js";

class Card extends Component {
  render() {
    const { title, description, className } = this.props;
    return (
      <div className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default createSkeleton(
  () => {
    return {
      title: "_____",
      description: "___________"
    };
  },
  ({ title }) => !title
)(Card);
