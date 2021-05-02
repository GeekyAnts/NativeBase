import Note from './src/note'

# Variants

Use the variant API to apply complex styles to a component based on a single prop.
This can be a handy way to support slight stylistic variations in button or typography components.

Import the variant function and pass variant style objects in your component definition.
When defining variants inline, you can use Styled System like syntax to pick up values from your theme.

<Note>

Note: Inline variants is a new feature in `v5.1.0`, which uses [@styled-system/css][].

</Note>

```js
// example Button with variants
import styled from 'styled-components'
import { variant } from 'styled-system'

const Button = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
)
```

The `Button` component can now use the `variant` prop to change between a primary and secondary style.

```jsx
<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
```

<Note>

Note: When using CSS properties in a variant, avoid mixing these styles with conflicting Styled System props. For example, if your variant includes the `color` property, avoid using the `color` React prop in your components.

</Note>

## Custom Prop Name

If you'd like to use a custom prop name other than `variant`, use the `prop` option.

```js
const Text = styled('div')(
  variant({
    prop: 'size',
    variants: {
      big: {
        fontSize: 4,
        lineHeight: 'heading',
      },
      small: {
        fontSize: 1,
        lineHeight: 'body',
      },
    }
  })
)

// <Text size='big' />
```

## Themeable Variants

If you'd like to enable theming of variants from the global theme object, use the `scale` option to define the theme key to use for variants.

```js
const Button = styled('button')(
  variant({
    scale: 'buttons',
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    },
  })
)
```

With the `scale` option above, the `theme.buttons` object can be used to override variants defined in the component.

```js
// example theme
export default {
  // base theme values...
  // custom button variants
  buttons: {
    primary: {
      color: 'white',
      bg: 'red',
    },
    secondary: {
      color: 'white',
      bg: 'tomato',
    },
  }
}
```

## Legacy API

To continue using the previous variant API,
without transforming style objects based on the theme,
omit the `variants` option.

```js
// legacy API
variant({
  prop: 'size',
  scale: 'typeSizes',
})
```

## Migrating from Legacy API

If you were previously using the legacy variant API, but would like to use theme-based values in your variants, it's recommended that you move the variant definitions inline into your component.
If you're using the same variants across multiple components, you can create a base component that others extend.

If you'd still like to keep variant definitions in your theme, but use theme-based style objects, you *must* add the `variants` option to the `variant` function call in your component with at least one variant defined.

```js
// to keep variant definitions in your theme,
// but use theme-based style objects, add a `variants` option
variant({
  prop: 'variant',
  scale: 'buttons',
  variants: {
    // can be blank to enable the new API
    primary: {},
  }
})
```

### Built-in Variants

The built-in variants use the following props and theme keys:

| Function Name | Prop        | Theme Key     |
| ------------- | ----------- | ------------- |
| `textStyle`   | `textStyle` | `textStyles`  |
| `colorStyle`  | `colors`    | `colorStyles` |
| `buttonStyle` | `variant`   | `buttons`     |

[@styled-system/css]: /css

