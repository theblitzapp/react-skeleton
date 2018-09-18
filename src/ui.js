import styled, { css, keyframes } from "styled-components";

export const defaultBaseColor = "#eee";

export const defaultHighlightColor = "#f5f5f5";

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const createSkeletonCSSMixin = (
  baseColor = defaultBaseColor,
  highlightColor = defaultHighlightColor,
  duration = 2
) => css`
  color: ${baseColor};
  background-color: ${baseColor};
  background-image: linear-gradient(
    90deg,
    ${baseColor},
    ${highlightColor},
    ${baseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  width: 100%;
  animation: ${skeletonKeyframes} ${duration}s ease-in-out infinite;
`;
