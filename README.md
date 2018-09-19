# @solo.gg/react-skeleton

⚡⚡⚡ Full fledged flexible skeleton loader for styled-components ⚡⚡⚡

<br/><br/>

# Examples:

## 1. Same styles (default) for all elements

<BasicDemoWithoutImagePlaceHolder/>

```jsx
// other imports
import skeletonFactory from "@solo.gg/react-skeleton";

// create skeleton
const Skeleton = skeletonFactory();

// wrap your elements using createElement so that
// animation styles are passed in skeleton mode
const Heading = Skeleton.createElement(
  styled.h1`
    color: #333;
    margin: 0 0 1rem;
    grid-area: b;
  `,
  createSkeletonCSSMixin("dodgerblue", "royalblue", 5)
);
// Base component which will be skeletonized
class Card extends React.Component {
  //...
  render() {
    const { title, description, img } = this.props;
    return (
      <div>
        <Heading>{title}</Heading>
        ...
      </div>
    );
  }
}
// wrap component with createComponent so that
// you can set global default values in skeleton mode
const SkeletonCard = Skeleton.createComponent(
  () => {
    return {
      title: "_____",
      description: "___________",
      img: ""
    };
  },
  ({ title }) => !title
)(Card);
```
