import React, { Component, createContext, forwardRef } from "react";
import styled, { css, keyframes } from "styled-components";
import getDisplayName from "./utils/getDisplayName";
import { createSkeletonCSSMixin, skeletonKeyframes } from "./ui";

const defaultMixin = createSkeletonCSSMixin();

const SkeletonCSSContext = createContext(null);

const createSkeleton = (skeletonMixin = defaultMixin) => {
  // helper function to create elements with styling built in
  const createElement = (BaseElement, mixin = skeletonMixin) => {
    // override default style
    const StyledBaseElement = styled(BaseElement)`
      ${props => props.showSkeleton && mixin};
    `;

    const RefForwardedElement = forwardRef(
      (props, ref) =>
        props.showSkeleton ? (
          <StyledBaseElement ref={ref} {...props} />
        ) : (
          <BaseElement ref={ref} {...props} />
        )
    );
    return class extends Component {
      render() {
        if (this.props.showSkeleton) {
          throw new Error("show Skeleton is a reserved prop for solo skeleton");
        }
        return (
          <SkeletonCSSConsumer>
            {showSkeleton => (
              <RefForwardedElement
                showSkeleton={showSkeleton}
                {...this.props}
              />
            )}
          </SkeletonCSSConsumer>
        );
      }
    };
  };

  const createComponent = (
    dummyDataProvider = () => ({}),
    predicate = () => true
  ) => WrappedComponent => {
    const RefForwardedComponent = forwardRef((props, ref) => (
      <WrappedComponent ref={ref} {...props} />
    ));

    return class SkeletonComponent extends Component {
      static displayName = `Skeleton${getDisplayName(WrappedComponent)}`;

      render() {
        if (predicate(this.props)) {
          const dummyData = dummyDataProvider(this.props);
          return (
            <SkeletonCSSContext.Provider value={true}>
              <WrappedComponent {...this.props} {...dummyData} />
            </SkeletonCSSContext.Provider>
          );
        } else {
          return (
            <SkeletonCSSContext.Provider value={false}>
              <WrappedComponent {...this.props} />
            </SkeletonCSSContext.Provider>
          );
        }
      }
    };
  };
  return {
    createComponent,
    createElement
  };
};
export const { Consumer: SkeletonCSSConsumer } = SkeletonCSSContext;

export { skeletonKeyframes };
export { createSkeletonCSSMixin };
export default createSkeleton;
