# How it Works

Most CSS-in-JS libraries accept functions as arguments to create dynamic styles based on props.
For example, the following sets color dynamically in styled-components based on the `color` prop:

```js
import styled from 'styled-components'

const Box = styled.div`
  color: ${props => props.color};
`
```

Beyond just passing a dynamic value, an entire style declaration can be returned in functions like this.

```js
import styled from 'styled-components'

const getColor = props => `color: ${props.color};`

const Box = styled.div`
  ${getColor}
`
```

Style object can also be returned, which is a much simpler way to handle dynamic values in JavaScript.

```js
import styled from 'styled-components'

// works exactly the same as the previous function
const getColor = props => ({
  color: props.color,
})

const Box = styled.div`
  ${getColor}
`
```

By using style objects instead of embedded CSS strings, Styled System is compatible with a wide range of CSS-in-JS libraries.

The core utilities in Styled System are built on this pattern and consist of functions that take `props` as an argument
and return style objects,
while making it simpler to use values from a theme and apply styles responsively across breakpoints.

These style functions can be written on a one-off basis, but Styled System is meant to help **reduce boilerplate**, ensure a **consistent styling API**, and speed the development of component-based design systems.
