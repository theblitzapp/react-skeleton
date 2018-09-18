# <code>Skeleton.createElement(reactElement, mixin?)</code>

Helps you create a react element with optional custom mixin else uses a default mixin

### Basic usage

```jsx
import skeletonFactory from "@solo.gg/react-skeleton";

const Skeleton = skeletonFactory();

const Heading = Skeleton.createElement(styled.h1`
    margin: 2rem 0;
`)

const Card = ({title})=> <Heading>{title}</Heading>

const SkeletonCard = Skeleton.createComponent(...)(Card)

<SkeletonCard/>
```

### Custom usage

Optionally you can override the mixin which was used in the factory function

```jsx
import skeletonFactory from "@solo.gg/react-skeleton";

// render red border in skeleton mode
const skeletonMixin = css`
  border: 1px solid red;
`;

// render large margin for heading only in skeleton mode
const headingMixin = css`
    margin: 10rem;
`;


const Skeleton = skeletonFactory(skeletonMixin);

const Heading = Skeleton.createElement(styled.h1`
    margin: 2rem 0;
`, headingMixin)

const Card = ({title})=> <Heading>{title}</Heading>

const SkeletonCard = Skeleton.createComponent(...)(Card)

<SkeletonCard/>
```
