import React, { Component } from "react";
import TestRenderer from "react-test-renderer";
import createSkeleton from "../src";

describe("skeleton", () => {
  let predicate, Skeleton;
  beforeEach(() => {
    predicate = props => {
      return !props.title;
    };

    class Card extends Component {
      render() {
        const { title, description } = this.props;
        return (
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        );
      }
    }

    Skeleton = createSkeleton(() => {
      return {
        title: "__________",
        description: "___________"
      };
    }, predicate)(Card);
  });
  it("should work", () => {
    expect(Skeleton).toBeDefined();
  });
  it("should render dummy data when predicate returns true", () => {
    const wrapper = TestRenderer.create(<Skeleton />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("should render real data when predicate returns false", () => {
    const wrapper = TestRenderer.create(
      <Skeleton title="Eren Yeager" description="Attack on Titan protagonist" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
