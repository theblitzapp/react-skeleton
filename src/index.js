import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import getDisplayName from "./utils/getDisplayName";
import { skeletonCSS as defaultSkeletonCSS, skeletonKeyframes } from "./ui";

const createSkeleton = (
  dummyDataProvider = () => ({}),
  predicate = () => false,
  skeletonCSS = defaultSkeletonCSS
) => WrappedComponent => {
  const StyledWrappedComponent = styled(WrappedComponent)`
    ${skeletonCSS};
  `;
  return class SkeletonComponent extends Component {
    static displayName = `Skeleton${getDisplayName(WrappedComponent)}`;
    render() {
      if (predicate(this.props)) {
        const dummyData = dummyDataProvider(this.props);
        return <StyledWrappedComponent {...this.props} {...dummyData} />;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
};

export default createSkeleton;
