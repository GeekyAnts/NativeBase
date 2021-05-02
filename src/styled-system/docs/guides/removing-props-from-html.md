# Removing props from HTML elements

Due to the nature of the popular `styled` higher order component,
as an author you must rely on the CSS-in-JS library you're using to decide whether or not to forward props along to the HTML element.
For the most part, these libraries do a good job of not forwarding props that aren't valid HTML attributes.
However, the Styled System API uses a few prop names that are either deprecated HTML attributes or SVG attributes and aren't intended to be rendered in the output HTML.
While most browsers should handle these stray HTML attributes with no problem, there might be good reason to clean these up in production.

## Emotion

Emotion has first-class support in its API for determining which props are forwarded to the HTML element with its [`shouldForwardProp`](https://emotion.sh/docs/styled#customizing-prop-forwarding) API.
Styled System has a optional utility that can be passed directly to this API.

Install the following utility to make sure your Emotion styled components do not render style props as HTML.

```sh
npm i @styled-system/should-forward-prop
```

In your styled component definition, pass this utility function as an option to the `styled` HOC.

```js
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { space, color } from 'styled-system'

const Box = styled('div', {
  shouldForwardProp,
})(space, color)
```

## Styled Components

Unfortunately, Styled Components does not currently support an API to control which props are forwarded to the HTML element.
**If you'd like to see support for this, please leave a comment on their long-running issue:**

**[Separate HTML attributes from styling props][styled components issue]**

[styled components issue]: https://github.com/styled-components/styled-components/issues/439

## `css` Prop

If you're a fan of using the [`css` prop][], you can easily control which props are forwarded to the HTML element, just like in any other React component. It might be a little more work up front, but can be useful in some cases.

```js
// example using Emotion's css prop
import React from 'react'
import { color } from 'styled-system'

export default ({ color, bg, ...props }) => (
  <div {...props} css={theme => color({ theme, color, bg })} />
)
```

[`css` prop]: https://emotion.sh/docs/css-prop
