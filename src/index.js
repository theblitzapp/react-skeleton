import React, { Component } from "react";
import { css, keyframes } from "styled-components";
import getDisplayName from "./utils/getDisplayName";

const createSkeleton = (
  dummyDataProvider = () => ({}),
  predicate = () => false
) => WrappedComponent => {
  return class SkeletonComponent extends Component {
    static displayName = `Skeleton${getDisplayName(WrappedComponent)}`;
    render() {
      if (predicate(this.props)) {
        const dummyData = dummyDataProvider(this.props);
        console.log(dummyData);
        return <WrappedComponent {...this.props} {...dummyData} />;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
};

export default createSkeleton;
