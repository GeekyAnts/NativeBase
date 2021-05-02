# Theming

One of the core features of Styled System is the ability to quickly reference values defined in a theme in your components' props.
Instead of hard-coding values or importing a theme into other components,
Styled System props hook directly into React context-based themes.

Given the following colors in a theme:

```js
const colors = {
  blue: '#07c',
}

export default {
  colors,
}
```

A component with `color` props can pick up the `blue` value:

```jsx
<Box color="blue" />
```
