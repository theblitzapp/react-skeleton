# <code>Skeleton.createComponent(dummyPropFactory, predicate)(WrappedComponent)</code>

This function helps create a component which governs when to show skeleton based on a predicate function. If the predicate function returns true, it renders dummy props and tells the elements within the component to render skeleton animation.

### Usage

```jsx
import skeletonFactory from "solo.gg/react-skeleton";

const Skeleton = skeletonFactory();
// create an element
const Heading = Skeleton.createElement(styled.h1`
  margin: 2rem 0;
`);

const Card = ({ title }) => <Heading>{title}</Heading>;

// if title doesn't exist , passes dashes as title to Card
// and render skeleton animation as defined in the factory
const SkeletonCard = Skeleton.createComponent(
  () => {
    return {
      title: "________"
    };
  },
  props => !props.title
)(Card);
```
