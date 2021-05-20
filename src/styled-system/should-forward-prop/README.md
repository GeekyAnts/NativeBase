
# @styled-system/should-forward-prop

Utility for filtering Styled System props with Emotion's shouldForwardProp option

```sh
npm i @styled-system/should-forward-prop
```

```js
import styled from '@emotion/styled'
import {
  space,
  color,
  typography
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Box = styled('div', { shouldForwardProp })(
  space,
  color,
  typography
)
```

## Custom Props

To exclude other custom props not included in Styled System, use the `createShouldForwardProp` utility.

```js
import styled from '@emotion/styled'
import { space, color } from 'styled-system'
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop'

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'd',
  'x'
])

const Box = styled('div', {
  shouldForwardProp
})(props => ({
  display: props.d,
  fontWeight: props.x ? 'bold' : null,
}),
  space,
  color
)
```

MIT License
