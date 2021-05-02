import background from '../src'

test('returns background styles', () => {
  const style = background({ backgroundImage: 'url(kitten.gif)' })
  expect(style).toEqual({ backgroundImage: 'url(kitten.gif)' })
})
