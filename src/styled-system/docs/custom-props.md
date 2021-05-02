# Custom Style Props

To extend Styled System for other CSS properties that aren't included in the library,
use the [`system`](/api#system) utility to create your own style functions.

All Styled System functions rely on these low-level utilities.

- `system` creates a style prop function
- `compose` combines multiple style prop functions into one

## Example

```jsx
import styled from 'styled-components'
import { system } from 'styled-system'

const textDecoration = system({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

const Link = styled.a`
  ${system({
    textDecoration: true,
    fontWeight: {
      property: 'fontWeight',
      scale: 'fontWeights',
    },
  })}
`

export default Link
```

The `system` function accepts an object with keys that represent style props for your component.
Each key can define the following:

- `property`: the CSS property to use in the returned style object
- `properties`: an array of multiple properties (e.g. `[ 'marginLeft', 'marginRight' ]`)
- `scale`: a string referencing a key in the `theme` object
- `transform`: a function to transform the raw value based on the scale
- `defaultScale` a fallback scale object for when there isn't one defined in the `theme` object

### `transform`

By default, Styled System will return either a value from the theme, based on a key, or the raw value.
To change how a style prop value is transformed, provide a custom `transform` function.
The function takes two arguments: `(value, scale)`, where `value` is the raw prop value, and `scale` is a theme scale object or array.

### Shortcut definition

If your style prop does not need to pick up values from the theme and the prop matches the intended CSS property, you can use a shortcut definition in the `system` function argument.

```js
system({
  transition: true,
})
```

This will take the `transition` prop and translate it into a style object.

### Style prop function

The `system` function returns a style prop function that can be used in Styled Components, Emotion, or other CSS-in-JS libraries.
This function takes `props` as an argument and returns a style object.
The style prop function includes a `.propNames` static array that can be used to detect which props the function accepts.

### Aliases

To create aliases for props with the `system` function, add a key for the aliased prop name.

```js
// example alias
import { system } from 'styled-system'

const config = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
}
// alias
config.bg = config.backgroundColor

export const color = system(config)
```

## Composition

To combine multiple Styled System functions in a single component, use the `compose` utility.

```js
import styled from 'styled-components'
import { space, layout, color, compose } from 'styled-system'

const Box = styled('div')(
  compose(
    space,
    layout,
    color
  )
)
```
