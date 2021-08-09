import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Size } from './Size';
import { Example as Vertical } from './Vertical';
import { Example as Color } from './color';
import { Example as Value } from './Value';
import { Example as FormControlled } from './FormControlled';
import { Example as Customized } from './Customized';
import { Example as Playground } from './Playground';
import { Example as Disabled } from './isDisabled';
import { Example as ReadOnly } from './isReadOnly';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Color', () => <Color />)
  .add('Vertical', () => <Vertical />)
  .add('Value', () => <Value />)
  .add('Customized', () => <Customized />)
  .add('Disabled', () => <Disabled />)
  .add('ReadOnly', () => <ReadOnly />)
  .add('Form Controlled', () => <FormControlled />);
