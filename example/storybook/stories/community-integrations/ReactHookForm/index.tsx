import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import RadioAndCheckbox from './RadioAndCheckbox';
import PinInput from './PinInput';
import Textarea from './Textarea';
import Select from './Select';
import NumberInput from './NumberInput';
import Switch from './Switch';
import Slider from './Slider';
import DemoForm from './DemoForm';
import Usage from './Usage';

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
