import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Playground } from './playground';
import { Example as Disabled } from './disabled';
import { Example as Basic } from './basic';
import { Example as CustomColor } from './customColor';
import { Example as Size } from './size';
import { Example as CustomIcon } from './customIcon';
import { Example as Invalid } from './invalid';
import { Example as WithRef } from './withRef';
import { Example as FormControlled } from './FormControlled';
import { Example as CheckboxGroup } from './checkboxGroup';
import { Example as ControlledCheckbox } from './controlledCheckbox';
import { Example as UnControlledCheckbox } from './uncontrolledCheckbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Playground', () => <Playground />)
  .add('Controlled checkbox', () => <ControlledCheckbox />)
  .add('Uncontrolled checkbox', () => <UnControlledCheckbox />)
  .add('Disabled', () => <Disabled />)
  .add('Invalid', () => <Invalid />)
  .add('Size', () => <Size />)
  .add('Custom Color', () => <CustomColor />)
  .add('Custom Icon', () => <CustomIcon />)
  .add('Checkbox Group', () => <CheckboxGroup />)
  .add('Form Controlled', () => <FormControlled />)
  .add('With Ref', () => <WithRef />);
