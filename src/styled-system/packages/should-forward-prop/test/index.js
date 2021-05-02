import shouldForwardProp, { props } from '../src'

test('returns true for valid HTML attributes', () => {
  const should = shouldForwardProp('href')
  expect(should).toBe(true)
})

props.forEach(prop => {
  test(`returns false for Styled System ${prop} prop`, () => {
    const should = shouldForwardProp(prop)
    expect(should).toBe(false)
  })
})
