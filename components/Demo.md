import Basic, {BasicDemoWithoutImagePlaceHolder} from "./Basic"
import CustomStyle from "./CustomStyle"
import CustomElementStyle from "./CustomElementStyle"

# @solo.gg/react-skeleton

This component shows a skeleton when data isn't loaded yet for a component.

<hr/>
<br/><br/><br/><br/>

## Same styles (default) for all elements

<BasicDemoWithoutImagePlaceHolder/>

```jsx
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

<br/><br/><br/><br/>

## Same styles (default) for all elements except Image now has placeholder

<Basic/>

```jsx
const SkeletonCard = Skeleton.createComponent(
  () => {
    return {
      title: "_____",
      description: "___________",
      img: "/static/placeholder100x100.png"
    };
  },
  ({ title }) => !title
)(Card);
```

<br/><br/><br/><br/>

## Modified styles (default except different colors) for all elements

<CustomStyle/>

<br/><br/><br/><br/>

## Modified styles for one element (default except different colors) , default for all elements

<CustomElementStyle/>

<br/><br/><br/><br/>
