# Theming

Theming is an aspect of web application development that can be difficult to abstract.
Every application has its own needs and Styled System is intended to be extremely flexible
for most theming concerns while guiding you to the _pit of success_.

Styled System follows a convention for naming fields and scales in your theme,
but leaves the organization of those scales up to you to decide.
For example, Styled System expects a `colors` object in your theme,
but that object can be flat, deeply nested, or even functionally generated based on other inputs.

If you don't have a complex color system to begin with, it's recommended that you start with a flat object,
then expand upon that when needed.

## Scales

In Styled System, the objects used in your theme are referred to as _scales_.
The intent behind these scales stems from constraint-based design,
and they are meant to make it easy to do the right thing,
but possible to handle one-off exceptions where needed.

For example, many designs tend to follow a common typographic scale where a limited number of font sizes are available.
This not only helps create a consistent visual rhythm in your application,
but also reduces the amount of guesswork a developer might have to do.
Instead of reading a value from a redline spec, a developer can learn to eyeball what font size is used and associate that with a value on the scale.
This also makes nudging things like font size easier.
When a designer asks a developer to make the font size bigger,
the value can go from `fontSize={4}` to `fontSize={5}` while still conforming to the typographic scale.

## Ordinal Scales

For scales that tend to have an implied order, such as font-size, margin, and padding,
it's recommended to use an array for storing those scales.
Arrays are intentionally limiting, making it difficult to add _in-between_ sizes in the future,
so be sure you have a good scale defined before using these widely in your application.

One of the benefits of using arrays is the ability to use numbers that reference values on your scales.
For example, if you've added a `margin={2}` to a component in your application, but you need to add just a little bit more space around the element, adding one to the number (`margin={3}`) moves one step up in the scale and helps avoids guesswork as to what the correct value should be.

## Aliases

For _in-between_ sizes that do become part of your design system, you can consider creating aliases to avoid major breaking changes.
For example, if you've defined `fontSizes` as an array, but would like to add a new value in at a later time, using JavaScript you can add a key to the array like this:

```js
const fontSizes = [12, 14, 16, 20, 24, 32, 48]

// aliased in-between value
fontSizes.lede = 18
```

<!--
See the [Aliases Guide](/guides/scale-aliases) for more.
-->

## Freeform Scales

For more complex and nuanced scales like color schemes, it's recommended to use plain objects with named keys.
If you're just starting out, it can be simpler to start with a flat object, but if you're working with a more complex color system, you can use nested arrays or nested plain objects.

```js
// a simpler, flat color scheme
colors: {
  text: '#000',
  background: '#fff',
  primary: '#07c',
}
```

```js
// a more complex color scheme
colors: {
  text: '#000',
  background: '#fff',
  blue: [
    // values from https://primer.style/components/docs/primer-theme
    '#f1f8ff',
    '#dbedff',
    '#c8e1ff',
    '#79b8ff',
    '#2188ff',
    '#0366d6',
    '#005cc5',
    '#044289',
    '#032f62',
    '#05264c'
  ],
  // additional colors...
}
```

With nested objects like the example above, the blue values can be accessed using dot notation.
This creates an ordered color scale that goes from light to dark and avoids the need to name hues with modifiers like `dark`, `darker`, or `darkerer`.
If you need to make the blue "just a little darker", it becomes a matter of incrementing the number.

```jsx
// Example using dot notation
<Box color="blue.3" />
```

## Mapping Values

Depending on the theming needs of your application, it can be useful to map generic keys on a scale to more tangible names.
For example, if your application requires a dark mode, or if you're building a whitelabel product, it might make sense to use an abstracted color naming system as opposed to using hue names.

If you don't have a need to create this sort of abstraction, it can be much more efficient to use the same language that your team naturally uses. If your team says, "use the blue button", creating an abstraction for that name like "primary" can be more effort than it's worth.

With Styled System, there's no right or wrong way to handle the definition of scales, but one useful approach is to create a base color object without any naming abstractions.

```js
// example
const baseColors = {
  black: '#000',
  white: '#fff',
  blue: '#07c',
}
```

This base color object can then be mapped to a color abstraction.

```js
// example color abstraction
const colors = {
  text: baseColors.black,
  background: baseColors.white,
  primary: baseColors.blue,
}
```

When creating scales like this, it's generally good practice to avoid unnecessary abstractions, so be sure to only go as far as you need to for your application.

## Extending

Since the Styled System theme object is a plain object, you can extend the theme however you see fit.
For example, if you have standard sizes for something like an avatar image that differ from other sizes used in your application,
it might make sense to add those values as a scale to your theme.
And remember, you can create [custom styled props](/custom-props) that map to any key in the theme.
