# Build a Box

One of the most widely used styled component types is the coveted Box layout component.
While many component libraries include a Box layout component already, you may want to create your own depending on the needs of your application.
This guide will walk through creating a Box component like the one found in [Rebass](https://rebassjs.org/Box) and show you how you can add additional functionality using Styled System.

Import `styled-components` and create a new component.

```js
// example Box.js
import styled from 'styled-components'

const Box = styled.div({})

export default Box
```

## Base Styles

Add some base-level styles to the component.
Use `boxSizing: 'border-box'` to ensure that padding is included in width,
and use `minWidth: 0` to ensure the Box can shrink below its minimum content size when used as a flex item.

```js
const Box = styled.div({
  boxSizing: 'border-box',
  minWidth: 0,
})
```

## Style Props

Next, import a few core Styled System functions to expose styles as props.
As a general rule of thumb, you should only expose style props when it's something likely to change on a per-instance basis throughout your app.
For styles that don't change frequently, it's generally better to [extend the component](#extending).

```js
// example Box.js
import styled from 'styled-components'
import { space, color, layout } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout
)

export default Box
```

With the component created above, you can quickly change styling contextually throughout your application.

```js
// example usage
<Box width={[1, 1 / 2]} p={4} mb={3} bg="tomato">
  This is a tomato box, with responsive width, some padding, and margin bottom
</Box>
```

## Flex Item Props

If you intend to use the Box component with flexbox, adding some more flexbox-specific style props can be helpful.
Add the following props to the Box.

```js
// example Box.js
import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox
)

export default Box
```

Using the pattern above, you can add as much or as little as you like to your Box component.
If you find yourself writing the same Box component over-and-over again, you might want to consider using a library like [Rebass][] or publishing your own UI component library to npm for reuse.

## Extending

Not every style you use in an application needs to be added to a component as a style prop.
For one-off customizations, it's often easier to extend a simpler component than it is to maintain a more complex Box component.

There are primarily two ways to extend styled components with libraries like [Styled Components][] and [Emotion][]:

1. Using the `css` prop
2. Creating an extended styled component

## `css` prop

The `css` prop is a very popular way to handle one-off styles.
If your Box component needs a small style change you can make it inline or create an extended component for reuse.

To use the `css` prop, you'll need to make sure you have either
[`babel-plugin-styled-components`](https://www.styled-components.com/docs/api#css-prop) installed,
or a Babel plugin or custom JSX pragma configured for [Emotion](https://emotion.sh/docs/css-prop).

```js
export default props => (
  <Box
    p={2}
    css={{
      borderBottom: '2px solid',
    }}
  >
    This Box is using the css prop inline
  </Box>
)
```

To use the `css` prop to extend the Box component for reuse, you can do something like the following:

```js
// extended Box component example
import React from 'react'

export default ({ large, ...props }) => (
  <Box
    {...props}
    p={large ? 4 : 2}
    css={{
      borderRadius: '4',
      border: '1px solid #f6f6f6',
      boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
    }}
  />
)
```

## Extending with `styled`

An alternative to using the `css` prop is to create a completely new styled component using the `styled` HOC.
You can create these components anywhere,
but it's common to colocate these in the same module that they're used in.

```js
import React from 'react'
import styled from 'styled-components'
import Box from './Box'

// extended Box component
const Card = styled(Box)({
  borderRadius: '4',
  border: '1px solid #f6f6f6',
  boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
})

// code for the component using the extended component below
```

[rebass]: https://rebassjs.org
[styled components]: https://styled-components.com
[emotion]: https://emotion.sh
