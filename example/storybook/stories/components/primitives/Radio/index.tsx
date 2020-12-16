import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Playground from './playground';
import Disabled from './disabled';
import CustomColor from './customeColor';
import CustomIcon from './customeIcon';
import Size from './size';
import Invalid from './invalid';
import FormControlled from './formControlled';
import WithRef from './withRef';
import ControlledRadio from './controlledRadio';
import UncontrolledRadio from './uncontrolledRadio';

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
