# skeletonFactory

Helps you create a skeleton with animation styles set for all elements created with this skeleton. Takes one argument which is a
css mixin, else uses a default mixin

### Basic usage

```jsx
import skeletonFactory from "@solo.gg/react-skeleton";

const Skeleton = skeletonFactory();
```

### Custom usage

```jsx
import skeletonFactory from "@solo.gg/react-skeleton";
import { css } from "styled-components";

// render red border in skeleton mode
const skeletonMixin = css`
  border: 1px solid red;
`;

const Skeleton = skeletonFactory(skeletonMixin);
```
