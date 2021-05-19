import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as TextArea } from './basic';
import { Example as Invalid } from './invalid';
import { Example as Size } from './size';
import { Example as Value } from './value';

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default', () => <TextArea />)
  .add('InValid and Disabled', () => <Invalid />)
  .add('Sizes', () => <Size />)
  .add('Value Controlled', () => <Value />);
