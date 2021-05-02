# Default Values

A question that comes up quite often is how do you define defaults for Styled System props.
Luckily, React has a built-in way to set defaults for props with the `defaultProps` object.

Let's say you have a Card component that nine times out of ten,
has a specific padding, but every once in a while, you need to change it up.
To add a default value for any Styled System prop, use `defaultProps` on your component.

```js
// example
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Card = styled.div(
  {
    borderRadius: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.125)',
  },
  space,
  color
)

Card.defaultProps = {
  p: 2,
  bg: 'white',
}

export default Card
```

With the default props above, your Card component will have padding and a white background by default.
You can override these styles when needed by passing a prop to the component.

```jsx
// example overriding default styles
<Card p={3} bg="lightgray">
  <Image />
  <Text />
</Card>
```
