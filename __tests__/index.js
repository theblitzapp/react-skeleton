import React, { Component } from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";
import styled from "styled-components";
import skeletonFactory, { createSkeletonCSSMixin } from "../src";
import { expectCSSMatchesSnapshot } from "../src/test/expectCSSMatches";

describe("skeleton basic", () => {
  let predicate, SkeletonComponent;
  beforeEach(() => {
    predicate = props => {
      return !props.title;
    };

    const Skeleton = skeletonFactory();

    const Heading = Skeleton.createElement(styled.h1``);

    const Paragraph = Skeleton.createElement(styled.p``);

    class Card extends Component {
      render() {
        const { title, description } = this.props;
        return (
          <div>
            <Heading>{title}</Heading>
            <Paragraph>{description}</Paragraph>
          </div>
        );
      }
    }

    SkeletonComponent = Skeleton.createComponent(() => {
      return { title: "__________", description: "___________" };
    }, predicate)(Card);
  });
  it("should work", () => {
    expect(SkeletonComponent).toBeDefined();
  });
  it("should have the right displayName", () => {
    expect(SkeletonComponent.displayName).toBe("SkeletonCard");
  });
  it("should render dummy data when predicate returns true", () => {
    const wrapper = TestRenderer.create(<SkeletonComponent />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("should load css correctly", () => {
    const wrapper = mount(<SkeletonComponent />);
    expectCSSMatchesSnapshot();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render real data when predicate returns false", () => {
    const wrapper = TestRenderer.create(
      <SkeletonComponent
        title="Eren Yeager"
        description="Attack on Titan protagonist"
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe("skeleton elements", () => {
  let predicate, Skeleton, SkeletonComponent, Heading, Paragraph;
  beforeEach(() => {
    predicate = props => {
      return !props.title;
    };

    Skeleton = skeletonFactory();

    Heading = Skeleton.createElement(styled.h1``);

    Paragraph = styled.p``;

    class Card extends Component {
      render() {
        const { title, description } = this.props;
        return (
          <div>
            <Heading>{title}</Heading>
            <Paragraph>{description}</Paragraph>
          </div>
        );
      }
    }

    SkeletonComponent = Skeleton.createComponent(() => {
      return { title: "__________", description: "___________" };
    }, predicate)(Card);
  });
  it("skeleton element shouldn't have skeleton styles when data is present", () => {
    const wrapper = mount(<SkeletonComponent title={"Eren"} />);
    expectCSSMatchesSnapshot();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("skeleton element should have skeleton styles when data is not present", () => {
    const wrapper = mount(
      <SkeletonComponent description={"Attack on Titan"} />
    );
    expectCSSMatchesSnapshot();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
