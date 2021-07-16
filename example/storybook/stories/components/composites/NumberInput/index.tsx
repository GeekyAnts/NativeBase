import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as FormControlled } from './FormControlled';
import { Example as Steps } from './Steps';
import { Example as DefaultValue } from './DefaultValue';
import { Example as Combination } from './Combination';
import { Example as MinMax } from './MinMax';

storiesOf('NumberInput', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('MinMax', () => <MinMax />)
  .add('Steps', () => <Steps />)
  .add('FormControlled', () => <FormControlled />)
  .add('Combination', () => <Combination />);
