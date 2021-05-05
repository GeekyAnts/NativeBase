
# @styled-system/theme-get

The `themeGet` function is an existential getter function
that can be used in any style declaration to get a value
from your theme, with support for fallback values.
This helps prevent errors from throwing when a theme value is missing,
which can be helpful when unit testing styled-components.

```sh
npm i @styled-system/theme-get
```

```js
themeGet(objectPath, fallbackValue)(props)
```

`themeGet` returns a function that accepts props as an argument
(`themeGet(objectPath)(props)`), which when used in a tagged template
literal should look like this:

```js
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const Box = styled.div`
  border-radius: ${themeGet('radii.small', '4px')};
`
```

When used with object literal syntax, `themeGet` needs to be in a
function call and have `props` passed to it:

```js
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const Box = styled('div')(props => ({
  borderRadius: themeGet('radii.small', '4px')(props),
}))
```
