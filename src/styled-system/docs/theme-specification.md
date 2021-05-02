# Theme Specification

---

The Styled System theme object is intended to be a general purpose format for storing design system style values and scales.
The objects shape is based on the [System UI Theme Specification][].
It is not coupled to Styled System's implementation and can be used in other similar libraries
where using common style values in multiple parts of a code base is desirable.

[system ui theme specification]: https://system-ui.com/theme

## Scale Objects

Many CSS style properties accept open-ended values like lengths, colors, and font names.
In order to create a consistent styling system, the theme object is centered around the idea of scales, such as a typographic (font-size) scale, a spacing scale for margin and padding, and a color object.
These scales can be defined in multiple ways depending on needs, but tend to use arrays for ordinal values like font sizes, or plain objects for named values like colors, with the option of nesting objects for more complex systems.

```js
// example fontSizes scale as an array
fontSizes: [12, 14, 16, 20, 24, 32]
```

```js
// example colors object
colors: {
  blue: '#07c',
  green: '#0fa',
}
```

```js
// example nested colors object
colors: {
  blue: '#07c',
  blues: [
    '#004170',
    '#006fbe',
    '#2d8fd5',
    '#5aa7de',
  ]
}
```

### Scale Aliases

For typically ordinal values like font sizes that are stored in arrays, it can be helpful to create aliases by adding named properties to the object.

```js
// example fontSizes aliases
fontSizes: [12, 14, 16, 20, 24, 32]
// aliases
fontSizes.body = fontSizes[2]
fontSizes.display = fontSizes[5]
```

### Excluded Values

Some CSS properties accept only a small, finite number of valid CSS values and should _not_ be included as a scale object.
For example, the `text-align` property accepts the following values:
`left`, `right`, `center`, `justify`, `justify-all`, `start`, `end`, or `match-parent`.
Other properties that are intentionally excluded from this specification include: `float`, `clear`, `display`, `overflow`, `position`, `vertical-align`, `align-items`, `justify-content`, and `flex-direction`.

## Keys

The keys in the theme object should typically correspond with the CSS properties they are used for, and follow a plural naming convention.
For example, the CSS property `font-size` is expected to use values from the `fontSizes` scale, and the `color` property uses values from the `colors` scale.

Some keys can be used for multiple CSS properties, where the data type is the same. The `color` object is intended to be used with any property that accepts a CSS color value, such as `background-color` or `border-color`.

### Space

The `space` key is a specially-named scale intended for use with margin, padding, and other layout-related CSS properties.
A space scale can be defined as either a plain object or an array, but by convention an array is preferred.
This is an intentional constraint that makes it difficult to add _"one-off"_ or _"in-between"_ sizes that could lead to unwanted and rippling affects to layout.

When defining space scales as an array, it is conventional to use the value `0` as the first value so that `space[0] === 0`.

```js
// example space scale
space: [0, 4, 8, 16, 32, 64]
```

```js
// example space scale object
space: {
  small: 4,
  medium: 8,
  large: 16,
}
```

```js
// example space scale with aliases
space: [0, 4, 8, 16, 32]
space.small = space[1]
space.medium = space[2]
space.large = space[3]
```

### Breakpoints

Breakpoints are CSS lengths intended for use in media queries.
In Styled System the breakpoints scale is used to create mobile-first responsive media queries based on array values.

For example, using a margin value of `[ 0, 1, 2 ]` creates styles with multiple mobile-first min-width media queries.

```js
// given this breakpoints scale:
breakpoints: ['40em', '52em', '64em']
```

```js
// and this margin prop value
m: [0, 1, 2]
```

```js
// Styled System outputs this style object
{
  margin: 0,
  '@media screen and (min-width: 40em)': {
    margin: '4px',
  },
  '@media screen and (min-width: 52em)': {
    margin: '8px',
  }
}
```

#### Media Queries

For convenience and for use with other styling approaches, a `mediaQueries` scale derived from the `breakpoints` scale can be added to the theme object.

```js
breakpoints: [ '40em', '52em', '64em' ]

mediaQueries: {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
}
```

### Key Reference

The following is a list of theme object keys and their corresponding CSS properties.
This list may be non-exhaustive.

| Theme Key        | CSS Properties                                                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `space`          | `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `grid-gap`, `grid-column-gap`, `grid-row-gap` |
| `fontSizes`      | `font-size`                                                                                                                                                                                        |
| `colors`         | `color`, `background-color`, `border-color`                                                                                                                                                        |
| `fonts`          | `font-family`                                                                                                                                                                                      |
| `fontWeights`    | `font-weight`                                                                                                                                                                                      |
| `lineHeights`    | `line-height`                                                                                                                                                                                      |
| `letterSpacings` | `letter-spacing`                                                                                                                                                                                   |
| `sizes`          | `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`                                                                                                                            |
| `borders`        | `border`, `border-top`, `border-right`, `border-bottom`, `border-left`                                                                                                                             |
| `borderWidths`   | `border-width`                                                                                                                                                                                     |
| `borderStyles`   | `border-style`                                                                                                                                                                                     |
| `radii`          | `border-radius`                                                                                                                                                                                    |
| `shadows`        | `box-shadow`, `text-shadow`                                                                                                                                                                        |
| `zIndices`       | `z-index`                                                                                                                                                                                          |

### Element Variants

Styled System includes the ability to define style object variants for particular element types.
For example, button variants can be defined with the `buttons` key, which a Button component can then switch between on a per-instance basis.

```js
// example button variants
buttons: {
  primary: {
    color: colors.white,
    backgroundColor: colors.blue,
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.green,
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.red,
  },
}

// using a button variant
<Button variant='primary' />
```

Which elements or components use these variant styles is left to the end-user and not restricted in any way.
Common style variants include: `textStyles`, `colorStyles`, and `buttons`.
