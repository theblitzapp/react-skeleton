import React, { Component } from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";
import createSkeleton from "../src";
import { expectCSSMatches } from "../src/test/expectCSSMatches";

describe("skeleton basic", () => {
  let predicate, Skeleton;
  beforeEach(() => {
    predicate = props => {
      return !props.title;
    };

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
  it("should have the right displayName", () => {
    expect(Skeleton.displayName).toBe("SkeletonCard");
  });
  it("should render dummy data when predicate returns true", () => {
    const wrapper = TestRenderer.create(<Skeleton />);
    expect(wrapper.toJSON()).toMatchSnapshot();
    const shallowWrapper = mount(<Skeleton />);
    //must have right className
    // please do not change the classname
    expect(shallowWrapper.find("div").prop("className")).toEqual(
      "src__StyledWrappedComponent-u89yob-0 eBORVg"
    );

    expectCSSMatches(`
      .src__StyledWrappedComponent-u89yob-0{ } 
      .eBORVg{ 
        background-color:#eee; 
        background-image:linear-gradient( 90deg,#eee,#f5f5f5,#eee ); 
        background-size:200px 100%; 
        background-repeat:no-repeat; 
        border-radius:4px; 
        display:inline-block; 
        line-height:1; 
        width:100%; 
        -webkit-animation:hNBTQs 2s ease-in-out infinite; 
        animation:hNBTQs 2s ease-in-out infinite; 
      } 
      @-webkit-keyframes hNBTQs{
         0%{ 
           background-position:-200px 0; 
         } 100%{ 
           background-position:calc(200px + 100%) 0; 
          } 
      } 
      @keyframes hNBTQs{
         0%{ 
           background-position:-200px 0; 
         } 100%{ 
           background-position:calc(200px + 100%) 0; 
         } 
      } 
    `);
  });

  it("should render real data when predicate returns false", () => {
    const wrapper = TestRenderer.create(
      <Skeleton title="Eren Yeager" description="Attack on Titan protagonist" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
