import propTypes from '../src'
import {
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle
} from 'styled-system'

test('includes prop types for all space prop names', () => {
  const types = Object.keys(propTypes.space)
  expect(types).toEqual(space.propNames)
})

test('includes prop types for all color prop names', () => {
  const types = Object.keys(propTypes.color)
  expect(types).toEqual(color.propNames)
})

test('includes prop types for all layout prop names', () => {
  const types = Object.keys(propTypes.layout)
  expect(types).toEqual(layout.propNames)
})

test('includes prop types for all typography prop names', () => {
  const types = Object.keys(propTypes.typography)
  expect(types).toEqual(typography.propNames)
})

test('includes prop types for all flexbox prop names', () => {
  const types = Object.keys(propTypes.flexbox)
  expect(types).toEqual(flexbox.propNames)
})

test('includes prop types for all border prop names', () => {
  const types = Object.keys(propTypes.border)
  expect(types).toEqual(border.propNames)
})

test('includes prop types for all background prop names', () => {
  const types = Object.keys(propTypes.background)
  expect(types).toEqual(background.propNames)
})

test('includes prop types for all position prop names', () => {
  const types = Object.keys(propTypes.position)
  expect(types).toEqual(position.propNames)
})

test('includes prop types for all grid prop names', () => {
  const types = Object.keys(propTypes.grid)
  expect(types).toEqual(grid.propNames)
})

test('includes prop types for all shadow prop names', () => {
  const types = Object.keys(propTypes.shadow)
  expect(types).toEqual(shadow.propNames)
})

test('includes prop types for all buttonStyle prop names', () => {
  const types = Object.keys(propTypes.buttonStyle)
  expect(types).toEqual(buttonStyle.propNames)
})

test('includes prop types for all textStyle prop names', () => {
  const types = Object.keys(propTypes.textStyle)
  expect(types).toEqual(textStyle.propNames)
})

test('includes prop types for all colorStyle prop names', () => {
  const types = Object.keys(propTypes.colorStyle)
  expect(types).toEqual(colorStyle.propNames)
})
