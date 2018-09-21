# <code>createSkeletonCSSMixin(?baseColor, ?highlightColor, ?duration, ?textColor)</code>

Helps create a mixin which is a variant of the default mixin for easy usage. TextColor is transparent by default.

### Basic usage

```jsx
import skeletonFactory, {createSkeletonCSSMixin} from "@solo.gg/react-skeleton";

const defaultMixin = createSkeletonCSSMixin()

const Skeleton = skeletonFactory(defaultMixin);
// same as
// const Skeleton = skeletonFactory();

...
```

### Custom colors

```jsx
import skeletonFactory, {createSkeletonCSSMixin} from "@solo.gg/react-skeleton";

const customMixin = createSkeletonCSSMixin("#aaa","#ccc", 5, "transparent")

const Skeleton = skeletonFactory(customMixin);
...
```
