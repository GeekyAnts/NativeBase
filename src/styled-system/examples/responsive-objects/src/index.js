import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system'

const Style = () =>
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: { margin: 0 }
    }}
  />

const theme = {
  breakpoints: [ '40em', '52em', '64em' ],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
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
    blue: '#07c',
    red: '#e10',
  },
}
theme.breakpoints.small = theme.breakpoints[0]
theme.breakpoints.medium = theme.breakpoints[1]
theme.breakpoints.large = theme.breakpoints[2]

const Root = styled('div')({
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 1.5,
})

const Box = styled('div')(
  space,
  width,
  fontSize,
  color
)

const Text = styled('div')(
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color
)

const Heading = props =>
  <Text
    as='h2'
    fontSize={5}
    lineHeight='1.25'
    m={0}
    {...props}
  />

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Style />
          <Box
            px={{ _: 3, medium: 4}}
            py={{ _: 5, medium: 6 }}
            color="white"
            bg="blue">
            <Heading
              fontSize={{ _: 4, small: 5, medium: 6 }}>
              Styled System
            </Heading>
            <Text fontWeight="bold">Responsive objects example</Text>
          </Box>
        </Root>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
