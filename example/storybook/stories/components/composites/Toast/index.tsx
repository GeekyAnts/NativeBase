import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Basic from './Basic';
import CustomID from './CustomId';
import PreventDuplicate from './PreventDuplicate';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Prevent Duplicate', () => <PreventDuplicate />)
  .add('Custom Id', () => <CustomID />)
  .add('Basic', () => <Basic />);
