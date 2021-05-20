
# @styled-system/variant

Read the docs: https://styled-system.com/variants

## Usage

```js
import styled from 'styled-components'
import variant from '@styled-system/variant'

const Button = styled('button')(
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
        ':hover': {
          bg: 'black',
        }
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
        ':hover': {
          bg: 'black',
        }
      },
    }
  })
)

// <Button variant='primary' />
// <Button variant='secondary' />
```

## Options

- `variants`: object of theme-aware variant styles with user-defined shape
- `prop`: (default `variant`) custom prop name for variant
- `scale`: optional theme key for adding variants to the theme object

MIT License
