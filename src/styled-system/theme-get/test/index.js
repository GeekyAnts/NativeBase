import { themeGet } from '../src'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('themeGet returns values from the theme', () => {
  const a = themeGet('colors.blue')({ theme })
  expect(a).toBe('#07c')
})

test('themeGet does not throw when value doesnt exist', () => {
  const a = themeGet('colors.blue.5')({ theme })
  expect(a).toBe(null)
})

test('themeGet accepts a fallback', () => {
  const a = themeGet('colors.lightblue', '#0cf')({ theme })
  expect(a).toBe('#0cf')
})
