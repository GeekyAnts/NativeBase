import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './usage';
import Size from './Size';
import Vertical from './Vertical';
import Color from './color';
import Value from './Value';
import FormControlled from './FormControlled';
import Customized from './Customized';
import Testing from './Testing';
import Playground from './Playground';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Color', () => <Color />)
  .add('Vertical', () => <Vertical />)
  .add('Value', () => <Value />)
  // Testing example is added for only testing purpose only.
  .add('Testing', () => <Testing />)
  .add('Customized', () => <Customized />)
  .add('Form Controlled', () => <FormControlled />);
