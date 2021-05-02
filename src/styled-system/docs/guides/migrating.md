# Migrating to v5

While the internal implementation of Styled System was completely refactored in version 5,
most of the v4 APIs have been shimmed to make migration as easy as possible.
We encourage you to take advantage of the new APIs and performance improvements introduced in v5 where possible,
but most of the v4 APIs should work as expected.

## Removed

The following has been removed from v5 and you should make these changes to migrate:

- The `themeGet` utility has been removed from the core package. Install and use the `@styled-system/theme-get` package instead.
- The following internal utilities and modules have been removed:
  - `isObject`
  - `is`
  - `px`
  - `num`
  - `createMediaQuery`
  - `cloneFunction`
  - `mapProps`
  - `defaultBreakpoints`
- Style functions no longer include a `propTypes` property. Use the `@styled-system/prop-types` utility instead (See [Updating Prop Types](#updating-prop-types))

## Changes

- Number values are no longer converted to strings with `px` units. Most CSS-in-JS libraries now handle this, but if you need to use string values with units, provide them in your theme object and in prop values.
- The `theme.breakpoints` object *must* specify CSS units. Numbers are no longer converted to pixel values.
- The theme keys `heights`, `minWidths`, `maxWidths`, `minHeights`, `maxHeights` have all been consolidated into a single `theme.sizes` scale
- The internal `get` utility's implementation has changed, if you've made use of this utility, either fork the code from v4 or ensure that you are using it with the following arguments: `get(object, path, fallback)`
- Functions no longer return `null`, but return an empty object (`{}`) instead
- Negative padding values are no longer returned. This would have been invalid CSS and generally should not cause issues for migration.
- The internal `merge` utility no longer deeply merges since it is not needed internally.

## Updating Prop Types

If you've made use of the `.propTypes` object on Styled System functions, follow these steps to migrate to version 5.

1. Install the prop types package

```sh
npm install @styled-system/prop-types
```

2. Replace existing prop type definitions in your components with prop types from the new package.

```js
import styled from 'styled-components'
import { color, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Box = styled('div')(color, space)

Box.propTypes = {
  // new API
  ...propTypes.color,
  ...propTypes.space,
}
```

## New Features

The core implementation of Styled System has changed to improve performance.
Shims for the v4 `styled` utility and other style functions are included,
but to ensure you get the benefit of the performance improvements,
it's recommended to make some of the following changes.

### Style Categories

The built-in style functions are now grouped by category, making it easier to create components for layout, typography, or other purposes.
For example, with v4 to add `width`, `height`, `display`, and other layout props, your code could have looked like the following:

```js
// version 4
const Box = styled('div')(width, height, display)
```

In version 5, built-in styles are grouped, and the above can be replaced with:

```js
// version 5
const Box = styled('div')(layout)
```

This API was inspired by [GitHub Primer][] and includes the following categories:

| Module       | Style Props                                                                                                                                                                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `space`      | `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginX`, `marginY`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingX`, `paddingY`, `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`, `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`, |
| `color`      | `color`, `backgroundColor`, `bg`                                                                                                                                                                                                                                             |
| `layout`     | `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`, `display`, `verticalAlign`, `size`                                                                                                                                                                      |
| `typography` | `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `fontStyle`, `textAlign`                                                                                                                                                                                            |
| `flexbox`    | `alignItems`, `alignContent`, `justifyItems`, `justifyContent`, `flexWrap`, `flexDirection`, `flex`, `flexGrow`, `flexShrink`, `flexBasis`, `justifySelf`, `alignSelf`, `order`                                                                                              |
| `border`     | `border`, `borderWidth`, `borderStyle`, `borderColor`, `borderRadius`, `borderTop`, `borderRight`, `borderBottom`, `borderLeft`, `borderX`, `borderY`,                                                                                                                       |
| `background` | `background`, `backgroundImage`, `backgroundSize`, `backgroundPosition`, `backgroundRepeat`                                                                                                                                                                                  |
| `position`   | `position`, `zIndex`, `top`, `right`, `bottom`, `left`                                                                                                                                                                                                                       |
| `grid`       | `gridGap`, `gridColumnGap`, `gridRowGap`, `gridColumn`, `gridRow`, `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`, `gridTemplateColumns`, `gridTemplateRows`, `gridTemplateAreas`, `gridArea`,                                                                            |

[github primer]: https://primer.style/components/system-props#system-prop-categories

### Compose

When using multiple categories or style functions together, use the `compose` utility before passing the functions to the `styled` higher order component.
This will help ensure the best performance possible.

```js
// v4
const Box = styled('div')(space, color)
```

```js
// v5
const styleProps = compose(
  space,
  color
)
const Box = styled('div')(styleProps)
```

### Custom Styles

While the `style` utility from v4 should continue to work as expected, you can take advantage of the new style customization API.

```js
// v4
const transition = style({
  prop: 'transition',
})
const Box = styled('div')(transition)
```

```js
// v5
const Box = styled('div')(
  system({
    transition: true,
  })
)
```

The new API allows you to define a set of custom style props together.

```js
const Box = styled('div')(
  system({
    fontSize: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
    // shortcut syntax
    transition: true,
  })
)
```
