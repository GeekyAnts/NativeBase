import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as ToastPositions } from './ToastPositions';
import { Example as ToastVariants } from './ToastVariants';
import { Example as Basic } from './Basic';
import { Example as CustomID } from './CustomId';
import { Example as PreventDuplicate } from './PreventDuplicate';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Toast Variants', () => <ToastVariants />)
  .add('Basic', () => <Basic />)
  .add('Toast Positions', () => <ToastPositions />)
  .add('Custom Id', () => <CustomID />)
  .add('Prevent Duplicate', () => <PreventDuplicate />);
