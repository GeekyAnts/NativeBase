import React from 'react'
import renderer from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'
import { space, color } from '../src'

const render = el => renderer.create(el).toJSON()

describe('styled-components', () => {
  test('default props can be overridden', () => {
    const Box = styled('div')(space)
    Box.defaultProps = {
      m: 0,
      px: 0,
      py: 0,
    }
    const json = render(
      <Box px={2} m={4} />
    )
    expect(json).toHaveStyleRule('padding-left', '8px')
    expect(json).toHaveStyleRule('padding-right', '8px')
    expect(json).toHaveStyleRule('padding-top', '0')
    expect(json).toHaveStyleRule('padding-bottom', '0')
    expect(json).toHaveStyleRule('margin', '32px')
  })

  test('extended components keep their props', () => {
    const Box = styled('div')(space)
    const Card = styled(Box)(color)
    const json = render(
      <Card
        m={3}
        color='tomato'
      />
    )
    expect(json).toHaveStyleRule('margin', '16px')
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('extended components keep their props with as prop', () => {
    const Box = styled('div')(space)
    const Card = styled(Box)(color)
    const json = render(
      <Card
        as='header'
        m={3}
        color='tomato'
      />
    )
    expect(json).toHaveStyleRule('margin', '16px')
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('responsive styles are rendered in the correct order', () => {
    const Box = styled('div')(space)
    const json = render(
      <Box
        m={[1, 2, 3]}
        p={[1, 2, 3]}
      />
    )
    expect(json).toMatchSnapshot()
  })
})
