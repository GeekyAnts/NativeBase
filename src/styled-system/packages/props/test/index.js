import { pick, omit } from '../src'

const props = {
  id: 'hi',
  className: 'beep',
  p: 3,
  bg: 'tomato',
  color: 'white',
}

test('omits styled-system props', () => {
  const attr = omit(props)
  expect(attr).toEqual({
    id: 'hi',
    className: 'beep',
  })
})

test('picks styled-system props', () => {
  const sx = pick(props)
  expect(sx).toEqual({
    p: 3,
    bg: 'tomato',
    color: 'white',
  })
})
