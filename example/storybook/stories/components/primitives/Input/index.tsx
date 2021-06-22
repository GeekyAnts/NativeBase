import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Size } from './Size';
import { Example as Variant } from './Variant';
import { Example as Addons } from './Addons';
import { Example as Elements } from './Elements';
import { Example as Masked } from './Masked';
import { Example as Controlled } from './Controlled';
import { Example as FormControlled } from './FormControlled';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Primary', () => <Basic />)
  .add('Size ', () => <Size />)
  .add('Variants', () => <Variant />)
  .add('Addons', () => <Addons />)
  .add('Elements', () => <Elements />)
  .add('Password', () => <Masked />)
  .add('Value Controlled', () => <Controlled />)
  .add('Form Controlled', () => <FormControlled />);
