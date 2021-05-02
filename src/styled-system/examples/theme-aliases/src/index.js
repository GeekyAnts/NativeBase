import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system'

injectGlobal`
  body{margin:0;}
`

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: '#07c',
    red: '#e10',
  },
}

// aliases
// currently a bug - numbers should be converted to px
theme.space.big = theme.space[5] + 'px'
theme.space['2.5'] = '12px'
theme.fontSizes.big = 96

const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0,
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Box px="big" py={['2.5', 'big']} color="white" bg="blue">
            <Heading fontSize="big">styled-system</Heading>
            <Text fontWeight="bold">Basic demo</Text>
          </Box>
        </Root>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
