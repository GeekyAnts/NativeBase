# Color Modes

While there are many different ways to handle theming in a web application,
there are just as many ways to handle color schemes.
A common feature of modern web applications is including an optional dark mode.
Usually a dark mode feature includes changes to the colors of a site without changing other typographic or layout styles.
This guide will walk through one approach (the one used on this site) that includes multiple color modes that can be changed by the end user.

Since the only styles that change between these color modes are the colors themselves, the different color palettes are stored in the `theme.colors` object.
If you look at this site's [theme file][], you'll see that it includes a nested `colors.modes` object for the different color schemes.
Each color mode object matches the same shape as the base default colors and uses a simple naming abstraction for setting colors for the text, background, links, and other styles.
This site's colors object looks something like the following:

```js
const colors = {
  text: '#000',
  background: '#fff',
  primary: '#00f',
  secondary: '#00a',
  gray: '#eee',
  lightgray: '#fafafa',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#f0e',
      gray: '#222',
      lightgray: '#111',
    },
    // other color modes...
  },
}
```

## Using the theme colors

By default the base colors are picked up by other components using Styled System. For example, the root layout component uses Emotion's `Global` component to set text and background colors.

```jsx
// example
<Global
  styles={css({
    body: {
      color: 'text',
      bg: 'background',
    },
  })}
/>
```

## Adding color mode state

The root layout component also uses React state to cycle through the different color modes and creates a new `theme` object based on state.
There are several different ways to store this state persistently, but this is outside of the scope of this guide.
The following is an example of one way to set up the color mode state in your app.

```jsx
import React, { useState } from 'react'
import merge from 'lodash.merge'
import get from 'lodash.get'
// the full theme object
import baseTheme from './theme'

// options for different color modes
const modes = [
  'light',
  'dark',
  // more than two modes can follow...
]

// merge the color mode with the base theme
// to create a new theme object
const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

export default props => {
  // state for changing modes dynamically
  const [mode, setMode] = useState(modes[0])
  const theme = getTheme(mode)

  return (
    <ThemeProvider theme={theme}>{/* application elements */}</ThemeProvider>
  )
}
```

Next you'll want to add the UI controls for changing between color modes.
With this basic approach, you should be able to add as many different color modes to your site as you wish.
Be sure that _all_ components within your application are using color values from the theme (not hard-coded values) in order for this to work as expected.

There are other ways to achieve a similar effect – this just demonstrates one approach.
For a different approach to persisting data, you may want to look into the [`prefers-color-scheme`][] media query, but it only handles binary `light` or `dark` modes.
You might also want to look into [CSS Custom Properties][],
which can be defined as inline styles, but be aware that they are not supported in IE11.

[theme file]: https://github.com/styled-system/styled-system/blob/master/docs/src/gatsby-plugin-theme-ui/index.js
[`prefers-color-scheme`]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
[css custom properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

<!--
- media query
- css custom properties (IE11)
-->
