/** @jsx jsx */
import { jsx, Global, ThemeContext } from '@emotion/core'
import React from 'react'
import { render } from 'react-dom'
import css from '@styled-system/css'

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  colors: {
    primary: '#07c',
    secondard: '#05a',
    highlight: '#e10',
  }
}

const Root = props =>
  <div
    {...props}
    css={css({
      fontFamily: 'body',
      lineHeight: 'body',
      p: 3,
    })}
  />

const Heading = props =>
  <h1 {...props}
    css={css({
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontSize: [ 4, 5 ],
      m: 0,
    })}
  />

export const App = props => {
  return (
    <ThemeContext.Provider value={theme}>
      <Root>
        <Global
          styles={{
            '*': { boxSizing: 'border-box' },
            body: {
              margin: 0,
            },
          }}
        />
        <Heading>
            @styled-system/css
          example
        </Heading>
        <pre
          css={css({
            fontFamily: 'monospace',
            color: 'primary'
          })}>
          npm i @styled-system/css
        </pre>
      </Root>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById('root'))
