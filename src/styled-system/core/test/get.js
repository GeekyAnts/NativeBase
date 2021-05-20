import { get } from '../src'

test('returns a deeply nested value', () => {
  const a = get(
    {
      colors: {
        blue: ['#0cf', '#0be', '#09d', '#07c'],
      },
    },
    'colors.blue.3'
  )
  expect(a).toBe('#07c')
})

test('supports fallback values', () => {
  const a = get({}, 'hi', 'nope')
  expect(a).toBe('nope')
})

test('handles number values', () => {
  const a = get([1, 2, 3], 0)
  expect(a).toBe(1)
})

test('handles undefined values', () => {
  const a = get({}, undefined)
  expect(a).toBe(undefined)
})

test('handles null values', () => {
  const a = get({}, null)
  expect(a).toBe(undefined)
})

test('returns 0 index items', () => {
  const a = get([ 'a', 'b', 'c' ], 0)
  expect(a).toBe('a')
})
