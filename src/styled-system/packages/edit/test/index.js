import React from 'react'
import renderer from 'react-test-renderer'
import {
  EditProvider,
  Field,
  FieldSet,
  ThemeControls,
  ResetButton,
} from '../src'

const theme = {
  colors: {
    text: 'black',
    background: 'white',
  },
  fontSizes: [ 12, 14, 16, 20, 24, 32 ],
}

test('renders', () => {
  const json = renderer.create(
    <EditProvider initialTheme={theme}>
      <ThemeControls />
    </EditProvider>
  ).toJSON()
  expect(json).toMatchSnapshot()
})
