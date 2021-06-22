import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import { Example as RadioAndCheckbox } from './RadioAndCheckbox';
import { Example as PinInput } from './PinInput';
import { Example as Textarea } from './Textarea';
import { Example as Select } from './Select';
import { Example as NumberInput } from './NumberInput';
import { Example as Switch } from './Switch';
import { Example as Slider } from './Slider';
import { Example as DemoForm } from './DemoForm';
import { Example as Usage } from './Usage';

storiesOf('React Hook Form', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Usage', () => <Usage />)
  .add('DemoForm', () => <DemoForm />) // Todo: Remove to somewhere else
  .add('Radio And Checkbox', () => <RadioAndCheckbox />)
  .add('Select', () => <Select />)
  .add('Slider', () => <Slider />)
  .add('Textarea', () => <Textarea />)
  .add('Switch', () => <Switch />)
  .add('NumberInput', () => <NumberInput />)
  .add('PinInput', () => <PinInput />);
