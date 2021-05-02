# Spacing

There are many ways to approach spacing (margin and padding) in a web application,
and Styled System is intended to work at a low enough level to support several of these
depending on your team's preferences.

If you're not familiar with Styled System's `space` utility,
you might want to read the [Getting Started](/getting-started/#margin--padding) documentation first.

## Where does space belong?

Generally speaking, it's a good idea to avoid adding default margins to reusable components in React.
Some people prefer to use a declarative approach by adding a "spacer" component in between other components.
This is the _[spacer.gif][]_ of React, and it's a completely acceptable practice, despite what some people may say.

[spacer.gif]: https://en.wikipedia.org/wiki/Spacer_GIF

Others prefer creating wrapper layout components that apply spacing to child components.
This is also an acceptable approach, but requires an additional layer of abstraction and creates a larger API surface area
for your component library. This approach will also be less familiar to people new to React.

The third common way, and the way that Styled System's API encourages you to approach this is through spacing props.

All three approaches are valid, and all three can be used together with Styled System helping ensure that the values used for spacing
are consistent across your entire application.

## Spacer Component

One of the simpler approaches comes from the early days of the web, and is a really great way to add space to UI.

To create a spacer component with Styled System, you can either reuse a [Box component](/guides/build-a-box) or create a specialized component
for this purpose.

```js
// example Spacer component
import styled from 'styled-components'
import { space } from 'styled-system'

const Spacer = styled.div(space)
```

To use the Spacer component, render it without any children and use the margin props.

```js
// example Spacer usage
<Header />
<Spacer mb={4} />
<Section />
```

The Spacer component is also really great for flexbox layouts, where `margin: auto` will fill any remaining space.

```js
// example Spacer in flexbox
<Flex>
  <Logo />
  <Spacer m="auto" />
  <Link>Beep</Link>
  <Link>Boop</Link>
</Flex>
```

## Wrapper Component

Some people use a wrapping parent component to control spacing on child components.
This is exactly what [Rebass Space][] does and can be useful for tiled layouts or grid systems.

To target child elements you can either use the `React.Children` API to map over child elements, or use child CSS selectors.
The use of child CSS selectors can lead to styling bugs and isn't generally recommended.

```js
// example using child CSS selectors
import styled from 'styled-components'
import { space } from 'styled-system'

const SpaceChildren = styled.div`
  & > * {
    ${space}
  }
`
```

The following example comes from [Rebass Space][].
This approach does not create a wrapping element and does not rely on child CSS selectors.

```jsx
import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const classnames = (...args) => args.join(' ')
const getClassName = el => (el.props && el.props.className) || ''

export const StyledChildren = ({ className, children, ...props }) => {
  const styledChildren = React.Children.toArray(children).map(child =>
    React.cloneElement(child, {
      className: classnames(getClassName(child), className),
    })
  )
  return <>{styledChildren}</>
}

const SpaceChildren = styled(StyledChildren)(space)

SpaceChildren.propTypes = space.propTypes

export default SpaceChildren
```

## Space Props

While the above approaches work perfectly fine, it can be useful to control margin and padding on a per-element basis.
This is where Styled System's `space` utility really shines.
It lets you add margin and padding props to any component, whether it's a Box layout component, a heading, or a button.
By including the `space` props in your components, you can quickly make one-off adjustments and adapt to changing requirements.

The `space` utility can be added to any component that accepts the `className` prop.

```js
// example
import styled from 'styled-component'
import { space } from 'styled-system'

const Heading = styled.h2(space)
```

When using the component, you can adjust margin and padding in any direction needed.

```jsx
// example usage
<Heading mt={0} mb={4} pl={0}>
  Hello
</Heading>
```

[rebass space]: https://github.com/rebassjs/rebass/tree/master/packages/space

While the `space` utility is a perfect choice for most cases, it can be useful to add only margin or padding props to 
a component. To handle those cases, Styled System provides subsets of the `space` utility: `padding` and `margin` utilities.

The `padding` utility adds only padding props to a component and the `margin` utility adds only margin props. Usage of 
the utilities are the same as the usage of `space` utility

```js
// margin utility example
import styled from 'styled-component'
import { margin } from 'styled-system'

const Paragraph = styled.p(margin)
```

When using the component, you can adjust margin, but not padding:

```jsx
// example usage
<Paragraph mt={0} mb={4}>
  I have only margin props available
</Paragraph>
```
