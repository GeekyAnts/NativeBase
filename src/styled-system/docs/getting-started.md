import Note from './src/note'

# Getting Started

Styled System is a collection of utility functions that add style props
to your React components
and allows you to control styles based on a global theme object
with typographic scales, colors, and layout properties.

To use Styled System, install a CSS-in-JS library such as [Styled Components][] or [Emotion][].

```sh
npm i styled-system styled-components
```

## Create a Component

Create a new component that uses style functions from Styled System.
To start with, add the `color` function to the component's styles argument.

```javascript
import styled from 'styled-components'
import { color } from 'styled-system'

const Box = styled.div`
  ${color}
`

export default Box
```

Now, this component will have two style props available: `color` to set foreground color, and `bg` to set background color.
(You can also use `backgroundColor` if you're adverse to terse naming conventions.)

```jsx
<Box color="#fff" bg="tomato">
  Tomato
</Box>
```

So far, this component can be styled with any valid CSS color.
To create a more consistent UI, create a theme module with a `colors` object.

```js
// theme.js
export default {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
}
```

## Theming

Most CSS-in-JS libraries include a ThemeProvider to provide values through React context.
Import the styled-components [ThemeProvider][] in the root of your application and pass the theme to the `theme` prop.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>{/* application elements */}</ThemeProvider>
)

export default App
```

[themeprovider]: https://www.styled-components.com/docs/advanced#theming

With the ThemeProvider added, the Box component now has access to the colors defined in the theme object.

```jsx
<Box color="black" bg="blue">
  Blue Box
</Box>
```

Styled System will attempt to find a value based on keys in the theme and fallback to the raw value if it's not defined in the theme.

```jsx
// this example uses the CSS color keyword `tomato` since it's not defined in the theme
<Box bg="tomato" />
```

To make the Box component a little more useful, add a few more Styled System functions
to handle layout styles.

```jsx
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
`

export default Box
```

If you prefer using the plain object syntax, you can pass Styled System functions in as arguments.

```js
// example using object syntax
const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color
)
```

## Margin & Padding

The `space` function adds margin and padding props.
The margin and padding props use a shorthand syntax, similar to
[Basscss][basscss], [Tachyons][tachyons], and [Bootstrap][bootstrap].

[basscss]: http://basscss.com/#basscss-margin
[tachyons]: http://tachyons.io/docs/layout/spacing/
[bootstrap]: https://getbootstrap.com/docs/4.1/utilities/spacing/

### Margin Props

- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left
- `mx` margin-left and margin-right
- `my` margin-top and margin-bottom

### Padding Props

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `px` padding-left and padding-right
- `py` padding-top and padding-bottom

<Note>

Note: you can also use longform prop names (e.g. `margin`, `paddingTop`) if you prefer.

</Note>

### Space Theming

To set a consistent negative-space scale, add a `space` array to your theme.
Use numbers to set pixel values, or use strings for other CSS units such as `rem`.
It's recommended to set `0` as the first value in the array.

```js
// theme.js
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
```

All spacing props accept numbers, strings, or arrays as values, where:

- Numbers between 0 and the last index of the `space` array are values from the `space` array defined in theme
- Numbers greater than the length of the `space` array are converted to pixels
- String values can be used for any valid CSS value (e.g. `'auto'` or `'2em'`)
- Margin props accept negative values to set negative margin
- Arrays can be used for [responsive styles](#responsive-styles)
- Note: numeric strings without a CSS unit will be used as indices for the array (e.g. `space['0']`)

## Layout

The `layout` function adds props for widths, heights, display, and more.
Widths and heights can use values defined in `theme.sizes` to help ensure consistency in layout styles.

The `width` prop accepts number, string, or array values, where:

- Numbers between 0 and 1 are converted to percentage based widths (e.g. `1/2` becomes `'50%'`)
- Numbers greater than 1 are converted to pixels
- Strings can be used for other CSS values (e.g. `'50vw'` or `'30em'`)
- Arrays can be used for [responsive styles](#responsive-styles)
- If an array is used to define `theme.sizes`, `width={0}` will return `theme.sizes[0]` and `width={1}` will return `theme.sizes[1]`

## Responsive Styles

All Styled System functions accept arrays as values to set styles responsively using a mobile-first approach.

```jsx
<Box
  width={[
    1, // 100% below the smallest breakpoint (all viewports)
    1 / 2, // 50% from the next breakpoint and up
    1 / 4, // 25% from the next breakpoint and up
  ]}
/>
```

```jsx
// responsive margin
<Text m={[ 0, 1, 2 ]} />

// responsive padding
<Text p={[ 2, 3, 4 ]} />

// responsive font-size
<Text fontSize={[ 3, 4, 5 ]} />
```

Read the [Responsive Styles][] docs for more information.

## Other Props

Styled System includes pre-built functions for many other commonly used CSS properties.
For a complete list, see the [Reference Table][] of style functions.

[styled components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[responsive styles]: /responsive-styles
[reference table]: /table
