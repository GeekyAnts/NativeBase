import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import ToastPositions from './ToastPositions';
import ToastVariants from './ToastVariants';
import Basic from './Basic';
import CustomID from './CustomId';
import PreventDuplicate from './PreventDuplicate';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Toast Variants', () => <ToastVariants />)
  .add('Basic', () => <Basic />)
  .add('Toast Positions', () => <ToastPositions />)
  .add('Custom Id', () => <CustomID />)
  .add('Prevent Duplicate', () => <PreventDuplicate />);
