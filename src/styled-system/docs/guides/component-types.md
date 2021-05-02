# Component Types

Some teams that have adopted Styled System take an approach to organizing UI components by type,
creating separate layout, typography, flexbox, and other categories when adding style props.
This means that each _layout_ component type is guaranteed to have the same props API as the others.
For an example of this approach, see [Primer Components](https://primer.style/components/docs/system-props).

To create your own component types, use the `compose` utility
to create custom style functions that each new component can use.

## Creating a Layout component type

To group these shared Styled System props together, create a new module that will include these style functions.

```js
// custom styled-system groupings
import { compose, space, color, display, width, maxWidth } from 'styled-system'

export const layout = compose(
  space,
  display,
  width,
  maxWidth,
  color
)
```

To add these props to a component, import the composed `layout` function and pass it to the `styled` function.

```js
// example component definition
import styled from 'styled-components'
import { layout } from './style-props'

export const Box = styled('div')(layout)
```

## Creating other component types

Be sure to discuss with your team to figure out what makes sense as a component type.
The following is a list of commonly used component types as a guide.

- `layout`; used for page layout, grid systems, and spacing
- `typography`: headings, paragraphs, labels, etc.
- `content`: images, videos, diagrams, etc.
- `position`: position, z-index, etc.
- `flexbox`: flexbox-related styles
- `border`: border colors, widths, styles, and radii
