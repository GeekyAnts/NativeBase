# Responsive Styles

Often when working on responsive layouts, it's useful to adjust styles along a singular dimension –
such as font-size, margin, padding, and width.
Instead of manually managing media queries and adding nested style objects throughout a code base,
Styled System offers a convenient shorthand syntax for adding responsive styles with a mobile-first approach.
While this syntax can seem odd at first, it can become a powerful way to manage responsive typography and layouts.

All style utilities add props that accept arrays as values for mobile-first responsive styles.

```jsx
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4   // 25% from the next breakpoint and up
  ]}
/>

// responsive font size
<Box fontSize={[ 1, 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```

## What it does

This shortcut is an alternative to writing media queries out by hand.
Given the following:

```jsx
<Box width={[1, 1 / 2, 1 / 4]} />
```

Using Styled System with a CSS-in-JS library will generate something like the following CSS:

```css
.Box-hash {
  width: 100%;
}

@media screen and (min-width: 40em) {
  .Box-hash {
    width: 50%;
  }
}

@media screen and (min-width: 52em) {
  .Box-hash {
    width: 25%;
  }
}
```

## Using objects

Alternatively, you can define breakpoints with aliases and use plain objects as values. Any undefined alias key will define the base, non-responsive value.

```js
// theme.js
const breakpoints = ['40em', '52em', '64em', '80em']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  breakpoints,
}
```

```jsx
<Box width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }} />
```

Read more in the [Array Props Guide](/guides/array-props).
