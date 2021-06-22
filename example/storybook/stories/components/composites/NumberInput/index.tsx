import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Usage from './Usage';
import FormControlled from './FormControlled';
import Steps from './Steps';
import DefaultValue from './DefaultValue';
import Playground from './Playground';
// import Combination from './Combination';
import MinMax from './MinMax';

storiesOf('NumberInput', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('MinMax', () => <MinMax />)
  .add('Steps', () => <Steps />)
  .add('FormControlled', () => <FormControlled />);
// .add('Combination', () => <Combination />);
