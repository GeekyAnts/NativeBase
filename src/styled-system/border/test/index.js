import border from '../src'

test('returns border styles', () => {
  const style = border({ border: '1px solid gold' })
  expect(style).toEqual({ border: '1px solid gold' })
})

test('returns individual border styles', () => {
  const style = border({
    theme: {
      borderWidths: { thin: 1 },
      colors: { primary: 'red' },
      borderStyles: { thick: 'solid' },
      radii: { small: 5 },
    },
    borderTopWidth: 'thin',
    borderTopColor: 'primary',
    borderTopStyle: 'thick',
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    borderBottomWidth: 'thin',
    borderBottomColor: 'primary',
    borderBottomStyle: 'thick',
    borderBottomLeftRadius: 'small',
    borderBottomRightRadius: 'small',
    borderRightWidth: 'thin',
    borderRightColor: 'primary',
    borderRightStyle: 'thick',
    borderLeftWidth: 'thin',
    borderLeftColor: 'primary',
    borderLeftStyle: 'thick',
  })
  expect(style).toEqual({
    borderTopColor: 'red',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderRightColor: 'red',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderLeftColor: 'red',
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
  })
})

test('returns border top and bottom radii', () => {
  const style = border({
    theme: {
      radii: { small: 5 },
    },
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    borderBottomRightRadius: 'small',
    borderBottomRightRadius: 'small',
  })
  expect(style).toEqual({
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomRightRadius: 5,
  })
})
