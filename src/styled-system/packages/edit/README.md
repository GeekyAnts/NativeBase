
# @styled-system/edit

**WIP** Debugging tool for live editing Styled System theme objects

*Currently only works with Emotion*

```sh
npm i @styled-system/edit
```

```jsx
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { EditProvider, ThemeControls } from '@styled-system/edit'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    <EditProvider>
      {props.children}
      <ThemeControls />
    </EditProvider>
  </ThemeProvider>
```

## Components

- `EditProvider` a stateful theme provider with context for live editing – receives `theme` from parent context
- `ThemeControls` a full, batteries-included theme editing form
- `FieldSet` renders fields for part of a `theme` object
- `Field` renders a form field for a single value from the `theme` object

```jsx
// example using FieldSet
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { EditProvider, ThemeControls } from '@styled-system/edit'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    <EditProvider>
      {props.children}
      <FieldSet name='colors' />
      <FieldSet name='fontSizes' />
    </EditProvider>
  </ThemeProvider>
```

```jsx
// example using Field
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { EditProvider, ThemeControls } from '@styled-system/edit'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    <EditProvider>
      {props.children}
      <FieldSet name='colors.text' />
      <FieldSet name='colors.background' />
    </EditProvider>
  </ThemeProvider>
```

## `FieldSet`

**Props**

- `name` (string) dot-notation key path for `theme` object
- `type` (string) type prop for child Field components (see below)
- `ignore` (array) array of key names to omit from the form

## `Field`

**Props**

- `name` (string) dot-notation key path for `theme` object
- `type` (string | 'number', 'select', or 'color') type of form field to render
- `options` (array) array of options to render for `select` type fields
- `render` (function) render prop for custom field UI

MIT License


