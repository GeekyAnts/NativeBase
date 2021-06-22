import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Playground } from './playground';
import { Example as Disabled } from './disabled';
import { Example as CustomColor } from './customColor';
import { Example as CustomIcon } from './customIcon';
import { Example as Size } from './size';
import { Example as Invalid } from './invalid';
import { Example as FormControlled } from './formControlled';
import { Example as WithRef } from './withRef';
import { Example as ControlledRadio } from './controlledRadio';
import { Example as UncontrolledRadio } from './uncontrolledRadio';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Controlled Radio', () => <ControlledRadio />)
  .add('Uncontrolled Radio', () => <UncontrolledRadio />)
  .add('Playground', () => <Playground />)
  .add('Disabled', () => <Disabled />)
  .add('Invalid', () => <Invalid />)
  .add('Size', () => <Size />)
  .add('Custom Color', () => <CustomColor />)
  .add('Custom Icon', () => <CustomIcon />)
  .add('Form Controlled', () => <FormControlled />)
  .add('With Ref', () => <WithRef />);
