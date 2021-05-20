
# @styled-system/props

Utilities for using Styled System props

```sh
npm i @styled-system/props
```

```js
import { pick, omit } from '@styled-system/props'

const attr = omit({
  id: 'keep-this',
  color: 'primary',
})
// { id: 'keep-this' }

const props = pick({
  className: 'hello',
  color: 'secondary',
})
// { color: 'secondary' }
```

MIT License
